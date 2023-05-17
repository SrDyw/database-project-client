import { createContext } from 'react'

export const AppContext = createContext();


export function AppContextProvider(props) {
    const value = 10;

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}