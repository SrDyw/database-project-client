import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
    const [win, setWin] = useState("");
    const [query, setQuery] = useState("");
    const [queryData, setQueryData] = useState([]);
    const [currTable, setCurrTable] = useState("");
    const [table, setTable] = useState("");

    return (
        <AppContext.Provider
            value={{
                win,
                setWin,
                query,
                setQuery,
                queryData,
                setQueryData,
                currTable,
                setCurrTable,
                table,
                setTable
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
