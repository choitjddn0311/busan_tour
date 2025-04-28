import { useState, useEffect } from 'react';
import axios from 'axios';
import {AttractionSection, AttractionContainer, CardContainer, AttractionCard, CardImgContainer, CardTextContainer, AttractionTextContainer } from "../styles/AttractionStyle";
import {LoadingContainer} from "../styles/loading";

const URL = "https://apis.data.go.kr/6260000/AttractionService/getAttractionEn";

const Attraction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData([]);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 10,
          // select 박스로 5개씩보기 이런식으로로
          pageNo: 5,
          // pageNo 최대 20
          resultType: 'json'
        }
      });

      console.log(response.data);
      setData(response.data.getAttractionEn.item);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <LoadingContainer>
          <div></div>
        </LoadingContainer>
      </>
    )
  }
  if (error) return <div>에러 발생!</div>;
  if (!data.length) return <div>데이터 없음</div>;

  return (
    <>
    <AttractionSection>
      <AttractionContainer>
        <CardContainer>
          {data.map((place) => (
            <AttractionCard key={place.UC_SEQ}>
              <CardImgContainer>
                <img src={place.MAIN_IMG_NORMAL} alt={place.TITLE}/>
              </CardImgContainer>
              <CardTextContainer>
                <h2>Busan <span>{place.PLACE}</span></h2>
                <ul>
                  <li className='location'>location: {place.ADDR1}</li>
                  <li className='contact'>contact: {place.CNTCT_TEL}</li>
                </ul>
              </CardTextContainer>
            </AttractionCard>
          ))}
        </CardContainer>
      </AttractionContainer>
    </AttractionSection>
    </>
  );
};

export default Attraction;
