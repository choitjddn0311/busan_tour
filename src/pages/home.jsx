import { useState } from "react";
import { Link } from "react-router-dom";
import { Section, VisualContainer, VideoContainer, VisualTextContainer } from "../styles/homeStyle";
import {AttractionContainer, CardContainer ,AttractionCard, CardImgContainer, CardTextContainer, AttractionTextContainer, PageStyleCircle, PageStyleCircle2} from "../styles/AttractionStyle";
import ModalMain from "../components/modal";
import { ModalImgContainer, ModalTextContainer, ModalTextInner } from "../styles/modalStyle";
import { FoodContainer, FoodCardContainer, FoodCard, FoodHoverCard } from "../styles/foodStyle";
import Video from "../assets/main.mp4";
import Img1 from "../assets/haeundae.jpg";
import Img2 from "../assets/gamcheon_village.jpg";
import Img3 from "../assets/haedong.jpg";
import Img4 from "../assets/gukjae_market.jpeg";
import Food1 from "../assets/food/GrilledClams.jpg";
import Food2 from "../assets/food/bibim.jpg";
import Food3 from "../assets/food/fishCake.jpg";
import Food4 from "../assets/food/gukbap.jpg";
import Food5 from "../assets/food/multteok.jpg";
import Food6 from "../assets/food/sashmi.jpg";


const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  const openModal = (card) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  }

  const handleMouseEnter = (i) => {
    setHoverCard(i)
  }

  const handleMouseLeave = () => {
    setHoverCard(null);
  }

  const cardData = [
    {
      img: Img1, 
      title: "Busan", 
      subTitle: "Haeundae Beach",
      location: "Haeundae Beach, Haeundae-gu, Busan",
      contact: "+82 51-749-5700"
    },
    {
      img: Img2,
      title: "Busan", 
      subTitle: "Gamcheon Village",
      location: "203 Gamnae 2-ro, Saha-gu, Busan",
      contact: "+82 51-204-1444"
    },
    {
      img: Img3,
      title: "Busan", 
      subTitle: "Haedong Yonggungsa Temple",
      location: "86, Yonggung-gil, Gijang-eup, Gijang-gun, Busan",
      contact: "+82 51-722-7744"
    },
    {
      img: Img4,
      title: "Busan", 
      subTitle: "Gukjae Market",
      location: "32, Junggu-ro, Jung-gu, Busan",
      contact: "+82 51-245-7389"
    }
  ]

  const FoodDatas = [
    {img: Food1, name: "Grilled Clams", about: "Fresh clams grilled over an open flame, often enjoyed with butter and spicy sauce."},
    {img: Food2, name: "Spicy Sweet Potato Noodles", about: "Chewy glass noodles made from sweet potato starch, mixed with vegetables and spicy sauce."},
    {img: Food3, name: "Fish Cake", about: "A popular street food made from ground fish and flour, often served in a warm broth."},
    {img: Food4, name: "Pork and Rice Soup", about: "A hearty soup made with tender pork slices and rice in a rich, milky broth."},
    {img: Food5, name: "Multteok", about: "Skewered rice cakes simmered in spicy broth, unique to Busan's street food scene."},
    {img: Food6, name: "Sashimi", about: "Thinly sliced raw fish served fresh, often with soy sauce and wasabi."}
  ];
  return (
    <>
      <Section>
        <VisualContainer>
          <VideoContainer>
            <video src={Video} autoPlay loop muted />
            <VisualTextContainer>
              <h1>Welcome to <span>Busan</span></h1>
              <p>you can do anything whatever you want in here</p>
            </VisualTextContainer>
          </VideoContainer>
        </VisualContainer>
      </Section>
      <Section>
        <AttractionContainer>
          <PageStyleCircle style={{right: "150px", bottom: "-300px"}}></PageStyleCircle>
          <PageStyleCircle2 style={{right: "80px" , bottom: "-220px"}}></PageStyleCircle2>
          <AttractionTextContainer>
            <h1><span>Busan</span> Attraction of this month</h1>
            <Link to="/attraction"><p>want to know more attraction?</p></Link>
          </AttractionTextContainer>
          <CardContainer>
            {cardData.map((card, i) => (
              <AttractionCard key={i} onClick={() => openModal(card)}>
                <CardImgContainer>
                  {card.img && <img src={card.img} alt={card.subTitle}/>}
                </CardImgContainer>
                <CardTextContainer>
                  <h2>{card.title} <span>{card.subTitle}</span></h2>
                    <div className="location">Location: {card.location}</div>
                    <div className="contact">contact: {card.contact}</div>
                </CardTextContainer>
              </AttractionCard>
            ))}
          </CardContainer>
        </AttractionContainer>
      </Section>
      <Section>
        <FoodContainer>
          <FoodCardContainer>
            {FoodDatas.map((food, i) => (
              <FoodCard
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                >
                <img src={food.img} alt={food.name} />
                <FoodHoverCard active={hoverCard === i}>
                  <h2>{food.name}</h2>
                  <p>{food.about}</p>
                </FoodHoverCard>
              </FoodCard>
            ))}
          </FoodCardContainer>
        </FoodContainer>
      </Section>

      {isModalOpen && selectedCard && (
        <ModalMain onClose={closeModal}>
          <ModalImgContainer>
          {selectedCard.img && <img src={selectedCard.img} alt={selectedCard.subtitle}/>}
          </ModalImgContainer>
          <ModalTextContainer>
            <ModalTextInner>
              <h1>{selectedCard.title} <span>{selectedCard.subTitle}</span></h1>
            <p>{selectedCard.about}</p>
            </ModalTextInner>
          </ModalTextContainer>
        </ModalMain>
      )}
    </>
  )
}

  
  export default Home;
  