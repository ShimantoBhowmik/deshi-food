import { createContext, useState, useEffect } from "react";
import { Listener } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
    const[currUser, setCurrUser] = useState(null);
    const val= { currUser, setCurrUser};

    useEffect(() => {
        const stopListening = Listener((user) =>{
            console.log(user);
        })

        return stopListening;
    }, []);
    
    return <UserContext.Provider value={val}>{children}</UserContext.Provider>
}