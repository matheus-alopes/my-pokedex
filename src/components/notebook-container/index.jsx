import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-provider";
import { PageCounterContext } from "../../contexts/page-counter-provider";
import { FavoritesProvider } from "../../contexts/favorites-provider";
import {NotebookContainer, Header, HeaderTitle, HeaderImage} from "./styles";
import pokeball from "../../assets/images/pokeball.png";
import { BackButtonSection } from "../back-button-section";
import { NextButtonSection } from "../next-button-section";
import { MenuSection } from "../menu-section";
import { Pokemons } from "../pokemons-list";

export const Diary = () => {
    const { theme } = useContext(ThemeContext);
    const { notebookPageCounter, setNotebookPageCounter } = useContext(PageCounterContext);

    function handleBack() {
        setNotebookPageCounter (
            (count) => count - 1
        )
    }

    return (
        <NotebookContainer id="notebook-container" className={theme}>
            <BackButtonSection
                clickFunction = { () => handleBack() }
                height={"small"}
                disabled={notebookPageCounter === 0}
            />

            <Header>
                <HeaderImage src={pokeball} alt="pokeball" />

                <HeaderTitle>Pokemon Diary</HeaderTitle>
            </Header>
            
            <NextButtonSection />

            <FavoritesProvider>
                <MenuSection />

                <Pokemons />
            </FavoritesProvider>
        </NotebookContainer>
    )
}