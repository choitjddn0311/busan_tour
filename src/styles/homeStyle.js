import styled, {css} from "styled-components";

const flexCenter = css `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.section `
    width: 100%;
    height: 100vh;
    ${flexCenter}
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
    overflow: hidden;
    object-fit: cover;
    ${flexCenter}

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
    flex-direction: column;
    gap: 20px;
    ${flexCenter}

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

export const ActivitiesContainer = styled.section `
    width: var(--containerWidth);
    height: 100%;
    background: red;
`