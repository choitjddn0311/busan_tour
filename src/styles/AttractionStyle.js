import styled from "styled-components";

export const AttractionSection = styled.section `
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 50px;
`

export const AttractionContainer = styled.div `
    width: var(--containerWidth);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AsectionContainer = styled.div `
    width: var(--containerWidth);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
`

export const AttractionTextContainer = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        color: #111;
        align-content: center;
    }

    & > h1 > span {
        color: var(--mainColor);
    }

    & p {
        text-decoration: underline;
        color: var(--subColor);
    }
`
export const CardContainer = styled.ul `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 50px;
`

    
export const AttractionCard = styled.li `
    width: 700px;
    height: 300px;
    background: #fff;
    box-shadow: 0 0 20px #efefef;
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;

    &:hover .location,
    &:hover .contact {
        color: #222;
        transition: .3s;
    }
    &:hover {
        box-shadow: 0 0 30px #ccc;
        transition: .3s;
    }
`

export const CardImgContainer = styled.div `
    width: 55%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;


    & > img {
        height: 100%;
    }
`

export const CardTextContainer = styled.div  `
    width: 45%;
    height: 100%;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 20px;

    & > h2 {
        width: 100%;
        text-align: end;
        color: var(--subColor);
    }
    & > h2 > span {
        color: var(--mainColor);
    }
    & ul {
        width: 100%;
    }
    & .contact {
        color: #aaa;
        transition: .3s;
    }

    & .location {
        width: 100%;
        height: 50px;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        color: #aaa;
        transition: .3s;
        text-overflow: ellipsis;
        align-content: center;
    }

`

export const PageButtonContainer = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
`

export const PageButton = styled.button `
    width: 50px;
    height: 50px;
    background: ${({active}) => (active ? 'var(--mainColor)' : '#fff')};
    color: ${({active}) => (active ? '#fff' : 'var(--mainColor)')};
    border: 1px solid var(--mainColor);
    border-radius: 3px;
    cursor: pointer;

`

export const PageChangeButton = styled.button `
    width: 50px;
    height: 50px;
    font-size: 25px;
    background: #fff;
    border: none;
    color: #aaa;
    text-align: center;
    align-content: center;

    &:hover {
        cursor: pointer;
        color: var(--mainColor);   
    }
`