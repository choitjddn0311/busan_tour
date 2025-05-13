import styled from "styled-components";

export const MarkdownContainer = styled.div `
    width: 100%;
    height: 125vh;
    display: flex;
    justify-content: center;
`

export const MarkdownMain = styled.div `
    width: var(--containerWidth);
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const PlannerTitle = styled.div `
    width: var(--containerWidth);
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h1 {
        color: var(--mainColor);
        width: 100%;
        height: 5vh;
        text-align: start;
        font-size: 45px;
    }

    & > input {
        width: 100%;
        height: 8vh;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 20px;
        outline: none;
        padding-left: 20px;
        color: #aaa;
    }
    & > input::placeholder {
        color: #aaa;
    }
`

export const PlannerSubmitArea = styled.div `
    width: var(--containerWidth);
    height:10vh;
    display: flex;
    justify-content: end;
    align-items: center;

    & > input {
        width: 200px;
        height: 60px;
        background: #fff;
        color: var(--mainColor);
        border: 1px solid var(--mainColor);
        border-radius: 5px;
        font-size: 18px;
        transition: color .3s, background .5s;
    }
    
    & > input:hover {
        background: var(--mainColor);
        color: #fff;
        transition: color .3s, background .5s;
        cursor: pointer;
    }
`