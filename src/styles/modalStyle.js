import styled from "styled-components";

export const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

export const Modal = styled.div `
    width: var(--containerWidth);
    height: 70vh;
    background: #fff;
    border-radius: 10px;
    display: flex;
`;

export const ModalImgContainer = styled.div `
    width: 45%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 90%;
        height: 90%;
    }
`

export const ModalTextContainer = styled.div `
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalTextInner = styled.div `
    width: 100%;
    height: 90%;
    
    & > h1 > span {
        color: var(--mainColor);
    }
`