import { createContext, useRef, useState } from "react";

export const GlobalContext = new createContext()

 function ContextProvider({children}){
    
    const isLoggedIn = useRef(false);

    return (
        <GlobalContext.Provider value = {{
             isLoggedIn
            }}>
            {children}
            </GlobalContext.Provider>
    )
}

export default ContextProvider;