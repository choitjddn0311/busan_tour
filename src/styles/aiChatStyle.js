import styled, {css} from "styled-components";

const setCenter = css `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AiChatContainer = styled.div `
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 200px;
    height: 200px;
    ${setCenter}
`
export const AiChat = styled.div `
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: #fff;
    border: 5px solid var(--mainColor);
    overflow: hidden;
    object-fit: cover;
    ${setCenter}
    
    & > img {
        width: 100%;
        height: 100%;
    }
`