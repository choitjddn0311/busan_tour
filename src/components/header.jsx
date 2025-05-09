import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import {Header as MainHeader, HeaderInner, Logo as MainLogo, Nav, GnbContainer, Gnb} from "../styles/headerStyle"
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScroll,setIsScroll] = useState(false);
    const location = useLocation();

    const isSpecialPage = ['/attraction' , '/food' , '/planner', '/planner_show'].some(path => location.pathname === path || location.pathname.startsWith(`${path}/`));
    
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
            <title>Busan | wonderful city</title>
            <MainHeader className={isScroll ? "ScrollHeader" : ""} isSpecialPage={isSpecialPage}>
            <HeaderInner className={isScroll ? "ScrollHeader" : ""} isSpecialPage={isSpecialPage}>
                <MainLogo>
                    <Link to="/">
                        <img src={Logo} alt="main Logo" />
                    </Link>
                </MainLogo>
                <Nav>
                    <GnbContainer>
                        <Gnb isSpecialPage={isSpecialPage}><Link to="/">home</Link></Gnb>
                        <Gnb isSpecialPage={isSpecialPage}><Link to="/attraction">attraction</Link></Gnb>
                        <Gnb isSpecialPage={isSpecialPage}><Link to="/food">restaurant</Link></Gnb>
                        <Gnb isSpecialPage={isSpecialPage}><Link to="/planner">planner</Link></Gnb>
                    </GnbContainer>
                </Nav>
            </HeaderInner>
        </MainHeader>
        </>
    )
};

export default Header;