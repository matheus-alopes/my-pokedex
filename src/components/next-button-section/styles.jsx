import styled, {keyframes} from "styled-components"

const NextButtonContainer = styled.div`
    grid-area: header;
    height: 152px;
    width: 130px;
    position: absolute;
    right: 0;
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 90px;
        height: 130px;
    };
    @media (max-width: 600px) {
        grid-area: buttons;
        height: auto;
        margin-top: 15px;
        background-color: transparent;
    };
`

const NextButton = styled.button`
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 0px 15px;
    background-color: var(--button-background-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: var(--button-background-hover-color);
        border: 1px solid var(--button-background-hover-color);
    }
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    };
`

const ArrowAnimation = keyframes`
    0% {
        transform: translateX(2px);
    }
    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(2px);
    }
`

const NextButtonImage = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    background-image: var(--button-image);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${ArrowAnimation} 1s ease-in-out infinite;
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    };
`

const NextButtonText = styled.p`
    color: var(--button-font-color);
    @media (max-width: 800px) {
        font-size: 22px;
    };
    @media (max-width: 600px) {
        display: none;
    };
`

export {NextButtonContainer, NextButton, NextButtonImage, NextButtonText}