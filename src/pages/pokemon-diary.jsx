import { Diary } from "../components/notebook-container"
import { PageCounterProvider } from "../contexts/page-counter-provider"

const PokemonDiaryPage = () => {
    return (
        <PageCounterProvider>
            <Diary />
        </PageCounterProvider>
    )
}

export { PokemonDiaryPage }