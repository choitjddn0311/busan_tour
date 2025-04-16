import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import {Header as MainHeader, HeaderInner, Logo as MainLogo, Nav, GnbContainer, Gnb} from "../styles/headerStyle"
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScroll,setIsScroll] = useState();
    
    useEffect(() => {
        const scroll = () => {
            setIsScroll(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll' , scroll);

        scroll();

        return () => {
            window.removeEventListener('scroll', scroll);
        }
    },[]);
    return (
        <>
            <title>Busan Tour</title>
            <MainHeader>
            <HeaderInner className={isScroll ? "ScrollHeader" : ""}>
                <MainLogo>
                    <Link to="/">
                        <img src={Logo} alt="main Logo" />
                    </Link>
                </MainLogo>
                <Nav>
                    <GnbContainer>
                        <Gnb><Link to="/">home</Link></Gnb>
                        <Gnb><Link to="/place">attraction</Link></Gnb>
                        <Gnb><Link to="/food">food</Link></Gnb>
                        <Gnb><Link to="/planner">planner</Link></Gnb>
                    </GnbContainer>
                </Nav>
            </HeaderInner>
        </MainHeader>
        </>
    )
};

export default Header;


// 100vh => 즉 비쥬얼 영역아래로 슬라이드 하면 box-shadow -> 0 0 20px #aaa;