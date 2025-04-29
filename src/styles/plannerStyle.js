import styled from "styled-components";

export const MarkdownContainer = styled.div `
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MarkdownInner = styled.div `
    width: 1440px;
    height: 100%;

    &.customEditor {
        width: 100% !important;
    }
`