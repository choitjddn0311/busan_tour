import styled from "styled-components";

export const Footer = styled.footer `
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    position: relative;
    z-index: 5;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px 0;
    }
`
export const FooterInner = styled.div `
    width: var(--containerWidth);
    height: 150px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 95%;
        flex-direction: column;
        height: auto;
        gap: 15px;
    }
`

export const FooterLogo = styled.div `
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;

    & > img {
        width: 100%;
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
    }

    @media (max-width: 768px) {
        width: 100px;
        height: auto;
    }
`

export const FooterRight = styled.div `
    width: 85%;
    height: 100%;
    color: #fff;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`
    
    export const RightTop = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    color: #fff;
`
    
    export const RightMid = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
    font-size: 20px;
`

export const RightBottom = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
`