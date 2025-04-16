import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
`;

export const HeaderInner = styled.div `
    width: var(--containerWidth);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    padding: 0 40px;
    background: #fff;

    &.ScrollHeader {
        box-shadow: 0 0 20px #eee,
                    0 0 40px #eee;
    }
`;

export const Logo = styled.div `
    width: 15%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;

    & a {
        width: 80%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`;

export const Nav = styled.nav `
    width: 50%;
    height: 100%;
`;

export const GnbContainer = styled.ul `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Gnb = styled.li `
    height: 100%;
    align-content: center;
    color: #111;
    position: relative;
    transition: .3s;
    font-size: var(--mainFontSize);

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        border-radius: 3px;
        background: var(--mainColor);
        transition: .3s;
    }

    &:hover {
        color: var(--mainColor);
        transition: .3s;
        cursor: pointer;
    }
    
    &:hover::after {
        height: 5px;
        transition: .3s;
    }
`