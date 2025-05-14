import styled from "styled-components";

export const FoodSection = styled.section `
    width: 100%;
    height: 130vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    flex-direction: column;
`
export const FoodContainer = styled.div `
    width: var(--containerWidth);
    display: flex;
    justify-content: center;
    align-items: start;
`

export const FoodCardContainer = styled.div `
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
`

export const FoodCard = styled.div `
    width: 350px;
    height: 350px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px #eee;

    & > img {
        height: 100%;
        border-radius: inherit;
    }
`

export const FoodHoverCard = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    opacity: ${(props) => (props.active ? "1" : "0")};
    pointer-events: ${(props) => (props.active ? "auto" : "none")};
    transition: opacity 0.3s ease;
    cursor: pointer;

    & > h2 {
        text-align: center;
        font-size: 25px;
    }

    & > p {
        text-align: center;
        font-size: 16px;
    }
    
`;

export const FoodText = styled.div `
    width: 710px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--mainColor);
    border-radius: 5px;
    transition: .3s;

    &:hover {
        background: #fff;
        transition: .3s;
        cursor: pointer;
    }

    &:hover > h1 {
        color: var(--subColor);
    }

    &:hover > h1 > span {
        color: var(--mainColor);
    }

    & > h1 {
        font-size: 40px;
        color: #fff;
    }

    &:hover > p {
        color: #111;
    }
    
    & > p {
        color: #fff;
    }
`