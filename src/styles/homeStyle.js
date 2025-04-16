import styled from "styled-components";

export const Section = styled.section `
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
`;

export const VisualContainer = styled.div `
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
`;

export const VideoContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: cover;

    & > video {
        width: 100%;
        filter:brightness(60%);
    }
`;

export const VisualTextContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: 50%;
    height: 40%;
    text-align: center;
    align-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-item: center;

    & > h1 {
        font-size: 100px;
    }
    & > h1 > span {
        color: var(--subColor);
    }
    & > p {
        font-size: var(--mainFontSize);
    }
`;

export const AttractionContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 100vh;
`;

export const AttractionInner = styled.div `
    width: var(--containerWidth);
    height: 80vh;
    background: red;
`;