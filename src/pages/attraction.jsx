import { useState, useEffect } from 'react';
import axios from 'axios';
import {AttractionSection, AsectionContainer, CardContainer, AttractionCard, CardImgContainer, CardTextContainer, PageButtonContainer, PageButton, PageChangeButton } from "../styles/AttractionStyle";
import {LoadingContainer} from "../styles/loading";
import ModalMain from '../components/modal';
import { ModalImgContainer, ModalTextContainer, ModalTextInner,Textcontext } from '../styles/modalStyle';
import { Error404, DataNot } from '../styles/errorStyle';
import E404 from "../assets/404error.png";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

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
  const buttonGroup = 5 //한 화면 버튼 개수;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const totalPages = Math.ceil(totalCount / numOfRows);

  const handlePageChange = (pageNumber) => {
    if(pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  }

  const currentGroup = Math.ceil(page / buttonGroup);
  const startPage = (currentGroup - 1) * buttonGroup + 1;
  const endPage = Math.min(startPage + buttonGroup - 1, totalPages);
  const pageNumbers = Array.from({length: endPage - startPage + 1}, (_,index) => startPage + index);

  const handlePrev = () => {
    if(startPage > 1) {
      setPage(startPage - 1);
    }
  };

  const handleNext = () => {
    if(endPage < totalPages) {
      setPage(endPage + 1);
    }
  }
  if (loading) {
    return (
      <>
        <LoadingContainer>
          <div></div>
          <h1>Loading...</h1>
        </LoadingContainer>
      </>
    )
  }
  if (error) {
    return (
      <>
        <LoadingContainer>
          <div></div>
          <h1>Loading...</h1>
        </LoadingContainer>
      </>
    )
  };
  if (!data.length) {
    return (
      <>
        <Error404>
          <img src={E404} alt="404" />
        </Error404>
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
                <img src={place.MAIN_IMG_THUMB} alt={place.TITLE}/>
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
          {startPage > 1 && (
            <PageChangeButton onClick={handlePrev}><FaAnglesLeft/></PageChangeButton>
          )}
          {pageNumbers.map((pageNumber) => (
            <PageButton
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              active={page === pageNumber}
            >
              {pageNumber}
            </PageButton>
          ))}
          {endPage < totalPages && (
            <PageChangeButton
              onClick={handleNext}><FaAnglesRight/></PageChangeButton>
          )}
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
              <ul>
                <li>Location: {selectedCard.TITLE}</li>
                <li>Traffic information: {selectedCard.TRFC_INFO}</li>
                <Textcontext>
                  about: {selectedCard.ITEMCNTNTS}
                </Textcontext>
              </ul>
            </ModalTextInner>
          </ModalTextContainer>
        </ModalMain>
      )}
    </>
  );
};

export default Attraction;
