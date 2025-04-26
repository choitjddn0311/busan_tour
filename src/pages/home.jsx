import { useState } from "react";
import { Link } from "react-router-dom";
import { Section, VisualContainer, VideoContainer, VisualTextContainer } from "../styles/homeStyle";
import {AttractionContainer, CardContainer ,AttractionCard, CardImgContainer, CardTextContainer} from "../styles/AttractionStyle";
import ModalMain from "../components/modal";
import { ModalImgContainer, ModalTextContainer, ModalTextInner } from "../styles/modalStyle";
import Video from "../assets/main.mp4";
import Img1 from "../assets/haeundae.jpg";
import Img2 from "../assets/gamcheon_village.jpg";
import Img3 from "../assets/haedong.jpg";

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  }

  const cardData = [
    {
      img: Img1, 
      title: "Busan", 
      subTitle: "Haeundae"
    },
    {
      img: Img2,
      title: "Busan", 
      subTitle: "Gamcheon Village"
    },
    {
      img: Img3,
      title: "Busan", 
      subTitle: "Haedong Yonggungsa Temple"
    },
    {
      img: Img2,
      title: "Busan", 
      subTitle: "Gamcheon Village"
    }
  ]
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
          <h1><span>Busan</span> Attraction of this month</h1>
          <Link to="/place"><p>want to know more attraction?</p></Link>
          <CardContainer>
            {cardData.map((card, i) => (
              <AttractionCard key={i}>
                <CardImgContainer>
                  {card.img && <img src={card.img} alt={card.subTitle}/>}
                </CardImgContainer>
                <CardTextContainer>
                  <h2>{card.title} <span>{card.subTitle}</span></h2>
                  <ul>
                    <li>Location:</li>
                    <li>  </li>
                  </ul>
                  <button onClick={() => openModal(card)}>click me</button>
                </CardTextContainer>
              </AttractionCard>
            ))}
          </CardContainer>
        </AttractionContainer>
      </Section>

      {isModalOpen && selectedCard && (
        <ModalMain onClose={closeModal}>
          <ModalImgContainer>
          {selectedCard.img && <img src={selectedCard.img} alt={selectedCard.subtitle}/>}
          </ModalImgContainer>
          <ModalTextContainer>
            <ModalTextInner>
              <h1>{selectedCard.title} <span>{selectedCard.subTitle}</span></h1>
            </ModalTextInner>
          </ModalTextContainer>
        </ModalMain>
      )}
    </>
  )
}

  
  export default Home;
  