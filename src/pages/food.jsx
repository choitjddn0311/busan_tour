import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingContainer } from '../styles/loading';
import { Error404, DataNot } from '../styles/errorStyle';
import E404 from "../assets/404error.png";
import { FoodSection, FoodContainer, FoodCardContainer, FoodCard, FoodHoverCard } from '../styles/foodStyle';
import { PageButtonContainer, PageButton, PageChangeButton } from '../styles/AttractionStyle';

const URL = "http://apis.data.go.kr/6260000/FoodService/getFoodEn";

const Food = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hoverCard, setHoverCard] = useState(null);

  const numOfRows = 12;
  const buttonGroup = 10;

  const fetchData = async () => {
    try {
      setError(null);
      setData([]);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows,
          pageNo: page,
          resultType: 'json'
        }
      });

      const responseData = response.data.getFoodEn;
      setData(responseData.item || []);
      setTotalCount(responseData.totalCount || 0);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(totalCount / numOfRows);
  const currentGroup = Math.ceil(page / buttonGroup);
  const startPage = (currentGroup - 1) * buttonGroup + 1;
  const endPage = Math.min(startPage + buttonGroup - 1, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageChange = (num) => {
    if (num >= 1 && num <= totalPages) {
      setPage(num);
    }
  };

  const handlePrev = () => {
    if (startPage > 1) {
      setPage(startPage - 1);
    }
  };

  const handleNext = () => {
    if (endPage < totalPages) {
      setPage(endPage + 1);
    }
  };

  const handleMouseEnter = (i) => {
    setHoverCard(i);
  };

  const handleMouseLeave = () => {
    setHoverCard(null);
  };

  if (loading) {
    return (
      <>
        <LoadingContainer>
          <div></div>
          <h1>Loading...</h1>
        </LoadingContainer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <LoadingContainer>
          <div></div>
          <h1>Loading...</h1>
        </LoadingContainer>
      </>
    );
  }

  if (!data.length) {
    return (
      <>
        <Error404>
          <img src={E404} alt="404" />
        </Error404>
      </>
    );
  }

  return (
    <>
      <FoodSection>
        <FoodContainer>
          <FoodCardContainer>
            {data.map((food,i) => (
              <FoodCard 
              key={food.UC_SEQ}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              >
                <img src={food.MAIN_IMG_THUMB} alt={food.TITLE} title={food.TITLE} />
                <FoodHoverCard active={hoverCard === i}>
                  <h2>{food.TITLE}</h2>
                  <p>{food.ADDR1 || "No address in the data"}</p>
                </FoodHoverCard>
                {/* food click 카드 */}
              </FoodCard>
            ))}
          </FoodCardContainer>
        </FoodContainer>
        <PageButtonContainer>
            {startPage > 1 && (
              <PageChangeButton onClick={handlePrev}>
                <i className="fa-solid fa-chevron-left"></i>
              </PageChangeButton>
            )}
            {pageNumbers.map((pageNum) => (
              <PageButton
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                active={page === pageNum}
              >
                {pageNum}
              </PageButton>
            ))}
            {endPage < totalPages && (
              <PageChangeButton onClick={handleNext}>
                <i className="fa-solid fa-chevron-right"></i>
              </PageChangeButton>
            )}
        </PageButtonContainer>
      </FoodSection>
    </>
  );
};

export default Food;
