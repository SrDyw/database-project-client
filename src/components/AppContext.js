import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
    const [win, setWin] = useState("start");
    const [query, setQuery] = useState("");
    const [queryData, setQueryData] = useState([]);
    const [currTable, setCurrTable] = useState("");
    const [table, setTable] = useState("");
    const [auto, setAuto] = useState('off');
    const [isLoading, SetLoadingState] = useState(false);
    const [isConnected, SetConnection] = useState(false);

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
                SetLoadingState,
                isConnected,
                SetConnection
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
