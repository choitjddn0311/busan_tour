import { Footer as FooterMain, FooterInner,FooterLogo, FooterRight,RightTop, RightMid,RightBottom } from "../styles/footerStyle";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return(
    <>
      <FooterMain>
        <FooterInner>
          <FooterLogo>
            <img src={Logo} alt="" />
          </FooterLogo>
          <FooterRight>
            <RightTop>
              <Link to='/'>home</Link>
              <Link to='/attraction'>attraction</Link>
              <Link to='/food'>restaurant</Link>
              <Link to='/planner'>planner</Link>
            </RightTop>
            <RightMid>
              <FaInstagram/>
              <FaFacebook/>
              <FaXTwitter/>
              <FaYoutube/>
            </RightMid>
            <RightBottom>
              <p>copyright &copy; 2025 최성우. All rights reserved</p>
            </RightBottom>
          </FooterRight>
        </FooterInner>
      </FooterMain>
    </>
  )
}

export default Footer;
