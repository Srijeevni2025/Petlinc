import { createContext, useState } from "react";

export const GlobalContext = new createContext()

 function ContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <GlobalContext.Provider value = {{
            isLoggedIn,
            setIsLoggedIn,
            loggedInUser, 
            setLoggedInUser
            }}>
            {children}
            </GlobalContext.Provider>
    )
}

export default ContextProvider;