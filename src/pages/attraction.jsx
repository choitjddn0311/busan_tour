import { useState, useEffect } from 'react';
import axios from 'axios';
import {AttractionSection, AsectionContainer, CardContainer, AttractionCard, CardImgContainer, CardTextContainer, AttractionTextContainer, PageButtonContainer, PageButton } from "../styles/AttractionStyle";
import {LoadingContainer} from "../styles/loading";
import ModalMain from '../components/modal';
import { ModalImgContainer, ModalTextContainer, ModalTextInner } from '../styles/modalStyle';
import { Error404, DataNot } from '../styles/errorStyle';
import E404 from "../assets/404error.png";

const URL = "https://apis.data.go.kr/6260000/AttractionService/getAttractionEn";

const Attraction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const numOfRows = 10;

  const openModal = (card) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  }

  const fetchData = async () => {
    try {
      setError(null);
      setData([]);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: numOfRows,
          pageNo: page,
          resultType: 'json'
        }
      });

      const responseData = response.data.getAttractionEn;
      setData(responseData.item || []);
      setTotalCount(responseData.totalCount || 0);
      console.log(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const totalPages = Math.ceil(totalCount / numOfRows);

  const handlePageChange = (pageNumber) => {
    if(pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  }
  if (loading) {
    return (
      <>
        <LoadingContainer>
          <div></div>
        </LoadingContainer>
      </>
    )
  }
  if (error) {
    return (
      <>
        <Error404>
          <img src={E404} alt="404" />
        </Error404>
      </>
    )
  };
  if (!data.length) {
    return (
      <>
        <DataNot>
          <h2>The Data is NOT FOUND in Page!</h2>
        </DataNot>
      </>
    )
  };

  return (
    <>
    <AttractionSection>
      <AsectionContainer>
        <CardContainer>
          {data.map((place) => (
            <AttractionCard key={place.UC_SEQ} onClick={() => openModal(place)}>
              <CardImgContainer>
                <img src={place.MAIN_IMG_NORMAL} alt={place.TITLE}/>
              </CardImgContainer>
              <CardTextContainer>
                <h2>Busan <span>{place.PLACE}</span></h2>
                  <div className='location'>location: {place.ADDR1}</div>
                  <div className='contact'>contact: {place.CNTCT_TEL}</div>
              </CardTextContainer>
            </AttractionCard>
          ))}
        </CardContainer>
        <PageButtonContainer>
          {Array.from({length: totalPages}, (_,index) => index + 1).map((pageNumber) => (
            <PageButton 
            key={pageNumber} 
            onClick={() => handlePageChange(pageNumber)}
            active={page === pageNumber}
            >
              {pageNumber}
            </PageButton>
          ))}
        </PageButtonContainer>
      </AsectionContainer>
    </AttractionSection>

    {isModalOpen && selectedCard && (
        <ModalMain onClose={closeModal}>
          <ModalImgContainer>
          {selectedCard.MAIN_IMG_NORMAL && <img src={selectedCard.MAIN_IMG_NORMAL} alt={selectedCard.PLACE}/>}
          </ModalImgContainer>
          <ModalTextContainer>
            <ModalTextInner>
              <h1>Busan <span>{selectedCard.PLACE}</span></h1>
            {/* <p> 여기에 설명 추가 (location 잘렸으니 location도)</p> */}
            </ModalTextInner>
          </ModalTextContainer>
        </ModalMain>
      )}
    </>
  );
};

export default Attraction;
