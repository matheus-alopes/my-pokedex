import { faFaceMeh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorPageContainer } from "./styles"

export const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <h1>Nothing to show here</h1>

            <FontAwesomeIcon
                 icon={faFaceMeh}
                 style={
                    {fontSize: "50px"}
                 }
            />
        </ ErrorPageContainer>
    )
}