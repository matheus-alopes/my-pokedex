import styled, {css, keyframes} from "styled-components"

const BackButtonContainer = styled.div`
    grid-area: header;
    width: 130px;
    ${
        props => props.height == "small" && css `
            height: 152px;
            @media (max-width: 800px) {
                width: 90px;
                height: 130px;
            }
            @media (max-width: 600px) {
                grid-area: buttons;
                height: auto;
                margin-top: 15px;
                background-color: transparent;
            };
        `
    }

    ${
        props => props.height == "big" && css `
            height: 100%;
            position: absolute;
            left: 0;
            @media (max-width: 800px) {
                width: 90px;
            }
            @media (max-width: 600px) {
                width: 70px;
            };
            @media (max-width: 450px) {
                width: 65px;
            };
        `
    }
    
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BackButton = styled.button`
    ${
        props => props.disabled == true && css `
        margin-bottom: 30px;
        `
    }

    ${
        props => props.height == "small" && css `
        margin-bottom: 10px;
        `
    }

    ${
        props => props.height == "big" && css `
        margin-bottom: 30px;
        `
    }

    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 5px 15px;
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

const BackButtonImage = styled.div`
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

const BackButtonText = styled.p`
    color: var(--button-font-color);
    @media (max-width: 800px) {
        font-size: 22px;
    };
    @media (max-width: 600px) {
        display: none;
    };
`

export {BackButtonContainer, BackButton, BackButtonImage, BackButtonText}