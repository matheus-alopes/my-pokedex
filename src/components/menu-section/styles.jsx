import styled, { css } from "styled-components"

const MenuSectionContainer = styled.div`
grid-area: menu;
height: 99.4%;
margin-top: 10px;
padding-top: 20px;
background-color: rgb(200, 0, 0, 0.15);
display: flex;
flex-direction: column;
gap: 28px;
@media (max-width: 800px) {
    position relative;
    display: none;
    ${
        props => props.clicked && css `
            display: flex;
            position: absolute;
            top: 180px;
            height: 450px;
            z-index: 2;
        `   
    };
}
`

const MenuBurguer = styled.div`
    width: 50px;
    height: 35px;
    transition: 1s transform;
    display: none;
    div:nth-child(n+1):nth-child(-n+3) {
        width: 100%;
        height: 4px;
        background-color: var(--button-font-color);
        margin: 6px 0;
        border-radius: 4px;
    };
    ${
        props => props.clicked && css `transform: rotate(45deg)`
    };
    div:nth-child(n+1):nth-child(-n+1) {
        transition: 1s transform;
        ${
            props => props.clicked && css `
                transform: translate(0, 9px) rotate(90deg);
            `
        };
    };
    div:nth-child(n+3):nth-child(-n+3) {
        transition: 1s transform;
        ${
            props => props.clicked && css `
                transform: translate(0, -11px);
            `
        };
    };
    @media (max-width: 800px) {
        position absolute;
        top: 145px;
        left: 10px;
        display: block;
        cursor: pointer;
    };
`
export { MenuSectionContainer, MenuBurguer }