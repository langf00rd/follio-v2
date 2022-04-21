import { createContext } from "react"

export const FollioContext = createContext()

export const AppProvider = ({ children }) => {
    return <FollioContext.Provider value={{

    }}>
        {children}
    </FollioContext.Provider>
}