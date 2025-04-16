import Video from "../assets/main.mp4";
import { Section, VisualContainer, VideoContainer, VisualTextContainer } from "../styles/homeStyle";

const Home = () => (
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
      .
    </Section>
  );
  
  export default Home;
  