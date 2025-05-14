import styled from "styled-components";

export const Footer = styled.footer `
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
    z-index: 5;
`
export const FooterInner = styled.div `
    width: 1700px;
    height: 150px;
    display: flex;
    justify-content: space-between;
`

export const FooterLogo = styled.div `
    width: 13%;
    height: 100%;
    display: flex;
    align-items: center;
    
    & > img {
        width: 100%;
    }
`

export const FooterRight = styled.div `
    width: 85%;
    height: 100%;
`

export const RightTop = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    color: #111;
`

export const RightMid = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    color: #111;
`

export const RightBottom = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
`