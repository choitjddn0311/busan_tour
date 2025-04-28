import styled, {css} from "styled-components";

export const AttractionSection = styled.section `
    width: 100%;
    
`

export const AttractionContainer = styled.div `
    width: var(--containerWidth);
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AttractionTextContainer = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        align-content: center;
    }

    & > h1 > span {
        color: var(--mainColor);
    }

    & p {
        text-decoration: underline;
        color: var(--mainColor);
    }
`
export const CardContainer = styled.ul `
    width: 100%;
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    `
    
    export const AttractionCard = styled.li `
    width: 700px;
    height: 300px;
    background: #fff;
    box-shadow: 0 0 20px #efefef;
    display: flex;
    border-radius: 10px;
    cursor: pointer;

`

export const CardImgContainer = styled.div `
    width: 55%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 0 0 10px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export const CardTextContainer = styled.div  `
    width: 45%;
    height: 100%;
    padding: 20px 20px 0 20px;

    & > h2 {
        width: 100%;
        height: 75px;
        text-align: end;
    }
    & > h2 > span {
        color: var(--mainColor);
    }

`