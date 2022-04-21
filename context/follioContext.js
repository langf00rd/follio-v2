import { createContext } from "react"

export const FollioContext = createContext()

export const FollioProvider = ({ children }) => {
    return <FollioContext.Provider value={{

    }}>
        {children}
    </FollioContext.Provider>
}