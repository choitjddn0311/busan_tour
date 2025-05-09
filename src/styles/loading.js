import styled from "styled-components";

export const LoadingContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 5;

    & div {
        width: 100px;
        aspect-ratio: 1;
        border: 8px solid #eee;
        border-right-color: var(--mainColor);
        border-radius: 50%;
        animation: s 1s infinite linear;
    }

    & h1 {
        color: var(--mainColor);
    }
    @keyframes s {
        to {
            transform: rotate(1turn);
        }
    }
`;