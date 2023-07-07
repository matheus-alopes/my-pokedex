import styled from "styled-components"

const ErrorPageContainer = styled.div`
    grid-area: pokemons;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 32px;
    color: var(--header-title-font-color);
    @media (max-width: 920px) {
        font-size: 27px;
    }
    @media (max-width: 800px) {
        font-size: 26px;
    }
    @media (max-width: 620px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
        font-size: 13px;
    }
`

export {ErrorPageContainer, }