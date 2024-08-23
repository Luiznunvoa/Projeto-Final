import {  createContext, useState } from "react"
import PropTypes from "prop-types"

export const ApplicationContext = createContext()

export function ApplicationContextProvider({children}){
    const [title, setTitle] = useState("American psycho")

    return (
        <ApplicationContext.Provider 
            value = {{
                title,
                setTitle
            }}>
                {children}
        </ApplicationContext.Provider>
    )
}

ApplicationContextProvider.propTypes = {
    children: PropTypes.node
}