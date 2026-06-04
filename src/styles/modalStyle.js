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

    @media (max-width: 768px) {
        width: 95%;
        flex-direction: column;
        height: 90vh;
        overflow-y: auto;
    }
`;

export const ModalImgContainer = styled.div `
    width: 50%;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    & > img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
        & > img { object-fit: cover; }
    }
`

export const ModalTextContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`

export const ModalTextInner = styled.div `
    width: 100%;
    height: 100%;

    & > h1 {
        color: var(--subColor);
    }
    
    & > h1 > span {
        color: var(--mainColor);
    }

    // & > div {
    //     width: 100%;
    //     height: 10%;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     color: #555;
    //     align-items: start;
    //     gap: 20px;
    // }

    & > ul {
        width: 100%:
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        padding: 10px;
    }
`

export const Textcontext = styled.li `
    width: 100%;
    overflow-y: scroll;
`