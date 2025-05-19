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

    const gnbItems = [
        {name: "home", path: "/"},
        {name: "attraction", path: "/attraction"},
        {name: "restaurant", path: "/food"},
        {name: "planner", path: "/planner"},
    ]
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
                        {gnbItems.map(item => {
                            const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}`);
                            return (
                                <Gnb key={item.path} isSpecialPage={isSpecialPage} className={isActive ? "active" : ""}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Gnb>
                            )
                        })}
                    </GnbContainer>
                </Nav>
            </HeaderInner>
        </MainHeader>
        </>
    )
};

export default Header;