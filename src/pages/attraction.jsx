import { useState, useEffect } from 'react';
import axios from 'axios';
import { AttractionContainer, CardContainer, AttractionCard, CardImgContainer, CardTextContainer, AttractionTextContainer } from "../styles/AttractionStyle";

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
          pageNo: 1,
          resultType: 'json'
        }
      });

      console.log(response.data);
      setData(response.data.getAttractionEn.item); // 바로 item만 저장!
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data.length) return <div>데이터 없음</div>;

  return (
    <AttractionContainer>
      <CardContainer>
        {data.map((place) => (
          <AttractionCard key={place.UC_SEQ}>
            <CardImgContainer>
              <img src={place.MAIN_IMG_NORMAL} alt={place.TITLE} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </CardImgContainer>
            <CardTextContainer>
              <h3>{place.TITLE}</h3>
              <p>{place.SUBTITLE}</p>
              <p>{place.ADDR1}</p>
            </CardTextContainer>
          </AttractionCard>
        ))}
      </CardContainer>
    </AttractionContainer>
  );
};

export default Attraction;
