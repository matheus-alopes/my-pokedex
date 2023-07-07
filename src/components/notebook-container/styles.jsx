import styled from "styled-components"

const NotebookContainer = styled.div`
    min-height: 100vh;
    width: 95vw;
    max-width: 1400px;
    margin: auto;
    background-image: var(--notebook-background-image);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
`

const Header = styled.header`
    grid-area: header;
    width: 100%;
    height: fit-content;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        padding-top: 0;
    };
`

const HeaderTitle = styled.h1`
    font-size: 40px;
    color: var(--header-title-font-color);
    @media (max-width: 700px) {
        font-size: 32px;
    };
    @media (max-width: 550px) {
        font-size: 28px;
    };
`

const HeaderImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    @media (max-width: 700px) {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    };
`

export {NotebookContainer, Header, HeaderTitle, HeaderImage}