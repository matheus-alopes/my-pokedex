import { PageCounter, PageCounterSectionContainer, PageCounterSectionTitle } from "./styles";

export const PageCounterSection = (props) => {
    return (
        <PageCounterSectionContainer>
            <PageCounterSectionTitle>
                Page
            </PageCounterSectionTitle>

            <PageCounter
                value={props.inputPageValue}
                onChange={props.inputPageNumberChangeFunction}
            />
        </PageCounterSectionContainer>
    )
}