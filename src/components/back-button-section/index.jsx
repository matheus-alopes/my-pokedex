import { Link } from "react-router-dom"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText } from "./styles"

export const BackButtonSection = (props) => {
    return (
        <BackButtonContainer height={props.height}>
                <Link to="/my-pokedex">
                    <BackButton onClick={props.clickFunction} height={props.height} disabled={props.disabled}>
                        <BackButtonImage/>
                    </BackButton>
                </Link>

                <BackButtonText>
                    BACK
                </BackButtonText>
        </BackButtonContainer>
    )
}