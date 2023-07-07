import styled, { css } from "styled-components";

const FilterFavoriteContainer = styled.div`
    width: 160px;
    height: 140px;
    border-radius: 8px 0 0 8px;
    background-color: var(--button-background-color);
    box-shadow: rgba(0, 0, 0, 0.24) -4px 4px 8px;
    color: var(--button-font-color);
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    @media (max-width: 1250px) {
        width: 140px;
        height: 120px;
    };
    @media (max-width: 800px) {
        width: 130px;
        height: 110px;
    };
`

const FilterFavoriteTitle = styled.h2`
    font-weight: 500;
    text-align: center;
    @media (max-width: 1250px) {
        font-size: 22px;
    };
    @media (max-width: 800px) {
        font-size: 20px;
    };
`

const FilterFavoriteIcon = styled.div`
    padding: 4px 8px;
    font-size: 36px;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--filter-favorites-box-color);

    ${
        (props) =>
            props.filterFavorites &&
                css`
                background-color: var(--background-color);
                box-shadow: var(--box-shadow) 0px 5px 15px;
                `
    }

    &:hover {
        box-shadow: var(--box-shadow) 0px 5px 15px;
        transition: 0.3s ease-in-out;
    };
    @media (max-width: 1250px) {
        font-size: 32px;
    };
    @media (max-width: 800px) {
        font-size: 30px;
    };
`

export { FilterFavoriteContainer, FilterFavoriteTitle, FilterFavoriteIcon }