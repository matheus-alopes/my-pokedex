import { useState, useEffect, useContext } from "react";
import { PageCounterContext } from "../../contexts/page-counter-provider";
import { PageCounterSection } from "../page-counter-section"
import { ThemeTogglerButton } from "../theme-toggler-button"
import { MenuBurguer, MenuSectionContainer } from "./styles";
import { FilterFavoriteSection } from "../filter-favorite-section";

const MenuSection = (props) => {
    const [inputPageNumber, setInputPageNumber] = useState("");

    const [clicked, setClicked] = useState(false)

    const { notebookPageCounter, setNotebookPageCounter } = useContext(PageCounterContext);

    useEffect (
        () => {
           setInputPageNumber(notebookPageCounter + 1);
        }
        ,
        [notebookPageCounter]
    )

    function handleInputPageNumberChange(event) {
        const newPageNumber = parseInt(event.target.value, 10) - 1; // Subtrai 1 para ajustar à indexação base 0
    
        if (isNaN(newPageNumber) || newPageNumber < 0 || newPageNumber > 128) {
            // Verifica se o número da página não é válido (NaN, menor que 0 ou maior que 127)
            setInputPageNumber(""); //Define o valor vazio no estado
        } else {
            setNotebookPageCounter(newPageNumber); //Define o novo valor do notebookPageCounter
        }
    }

    function handleMenuToggle() {
        setClicked(!clicked);
    }

    return (
        <>
            <MenuBurguer clicked = { clicked } onClick={ handleMenuToggle }>
                <div></div>
                <div></div>
                <div></div>
            </MenuBurguer>

            <MenuSectionContainer clicked = { clicked }>
                <PageCounterSection
                    inputPageValue={ inputPageNumber }
                    inputPageNumberChangeFunction={ handleInputPageNumberChange }
                />

                <FilterFavoriteSection />

                <ThemeTogglerButton />
            </MenuSectionContainer>
        </>
    )
}

export { MenuSection }