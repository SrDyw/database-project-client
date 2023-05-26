import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
    const [win, setWin] = useState("");
    const [query, setQuery] = useState("");
    const [queryData, setQueryData] = useState([]);
    const [currTable, setCurrTable] = useState("");
    const [table, setTable] = useState("");
    const [auto, setAuto] = useState('off');
    const [isLoading, SetLoadingState] = useState(false);

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
                setTable,
                auto,
                setAuto,
                isLoading,
                SetLoadingState
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
