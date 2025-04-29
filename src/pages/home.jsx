import { useState } from "react";
import { Link } from "react-router-dom";
import { Section, VisualContainer, VideoContainer, VisualTextContainer } from "../styles/homeStyle";
import {AttractionContainer, CardContainer ,AttractionCard, CardImgContainer, CardTextContainer, AttractionTextContainer} from "../styles/AttractionStyle";
import ModalMain from "../components/modal";
import { ModalImgContainer, ModalTextContainer, ModalTextInner } from "../styles/modalStyle";
import Video from "../assets/main.mp4";
import Img1 from "../assets/haeundae.jpg";
import Img2 from "../assets/gamcheon_village.jpg";
import Img3 from "../assets/haedong.jpg";
import Img4 from "../assets/gukjae_market.jpeg";

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
  