import styled, {css} from "styled-components";

const scrollHeaderStyle = css`
    justify-content: center;
    width: 800px;
`;

export const Header = styled.header `
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({isSpecialPage}) => (isSpecialPage ? 'relative' : 'fixed')};
    z-index: 2;

    &.ScrollHeader {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        background: #fff;
    }
`;

export const HeaderInner = styled.div `
    width: var(--containerWidth);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    padding: 0 40px;
    background: ${({isSpecialPage}) => (isSpecialPage ? '#fff' : 'transparent')};
    box-shadow: ${({isSpecialPage}) => (isSpecialPage ? '0 0 20px #eee' : '')};
    transition: .3s;

    &.ScrollHeader {
        ${scrollHeaderStyle}
        background: #fff;
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
    .ScrollHeader & {
        display: none;
    }
`;

export const Nav = styled.nav `
    width: 50%;
    height: 100%;

    .ScrollHeader & {
        width: 100%;
    }
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
    color: ${({isSpecialPage}) => (isSpecialPage ? '#111' : '#fff')};
    position: relative;
    transition: .3s;
    font-size: var(--mainFontSize);

    .ScrollHeader & {
        color: #111;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        border-radius: 3px;
        background: var(--subColor);
        transition: .3s;
    }

    &:hover {
        color: var(--subColor);
        transition: .3s;
        cursor: pointer;
    }
    
    &:hover::after {
        height: 5px;
        transition: .3s;
    }

    .ScrollHeader &::after {
        background: var(--mainColor);
    }
    .ScrollHeader &:hover {
        color: var(--mainColor);
    }
`