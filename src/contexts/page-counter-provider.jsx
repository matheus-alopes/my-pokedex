import { useState, createContext } from "react";

const PageCounterContext = createContext();

const PageCounterProvider = (props) => {
    const pageCounter = Number(localStorage.pageCounter); //O localStorage armazena no formato "string"

    const [notebookPageCounter, setNotebookPageCounter] = useState(pageCounter ? pageCounter : 0)

    return (
        <PageCounterContext.Provider value={{notebookPageCounter, setNotebookPageCounter}}>
            {props.children}
        </PageCounterContext.Provider>
    )
}

export {PageCounterContext, PageCounterProvider}