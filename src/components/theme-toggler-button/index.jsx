import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-provider";
import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle, TogglerButton, ThemesContainer, LightTheme, DarkTheme, Toggler } from "./styles"

export const ThemeTogglerButton = () => {
    const body = document.getElementsByTagName("body")[0];
    const toggler = document.getElementById("toggler");
    
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <TogglerButton 
                    onClick = {
                        ()=> {
                            if (theme == "light") {
                                toggleTheme();

                                body.style.backgroundColor = "var(--background-dark-color)"

                                toggler.classList.remove("up-animation");
                                toggler.classList.add("down-animation");
                            } 
                            
                            else if (theme == "dark") {
                                toggleTheme();

                                body.style.backgroundColor = "var(--background-light-color)"

                                toggler.classList.remove("down-animation");
                                toggler.classList.add("up-animation");
                            }
                        }
                    }
                >
                    <Toggler id="toggler" />
                </TogglerButton>

                <ThemesContainer>
                    <LightTheme>Light</LightTheme>

                    <DarkTheme>Dark</DarkTheme>
                </ThemesContainer>
            </ThemeTogglerButtonContainer>
        </ThemeTogglerContainer>
    )
}