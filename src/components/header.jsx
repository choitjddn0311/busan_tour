import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
import {Header as MainHeader, HeaderInner, Logo as MainLogo, Nav, GnbContainer, Gnb} from "../styles/headerStyle"

const Header = () => {
    return (
        <MainHeader>
            <HeaderInner>
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
    )
};

export default Header;
