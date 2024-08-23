import {  createContext, useState } from "react"
import PropTypes from "prop-types"

export const ApplicationContext = createContext()

export function ApplicationContextProvider({children}){
    const [title, setTitle] = useState("The Godfather")
    const [sessionId, setSessionId] = useState("eea1ddaa-eb35-49a1-ab92-b774343763d5")

    return (
        <ApplicationContext.Provider 
            value = {{
                title,
                setTitle,
                sessionId,
                setSessionId
            }}>
                {children}
        </ApplicationContext.Provider>
    )
}

ApplicationContextProvider.propTypes = {
    children: PropTypes.node
}