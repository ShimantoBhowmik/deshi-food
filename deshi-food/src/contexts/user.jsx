import { createContext, useState, useEffect } from "react";
import { Listener,createUserDoc } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
    const[currUser, setCurrUser] = useState(null);
    const val= { currUser, setCurrUser};

    useEffect(() => {
        const stopListening = Listener((user) =>{
            if(user){
                createUserDoc(user); 
            }
            setCurrUser(user);
        })

        return stopListening;
    }, []);
    
    return <UserContext.Provider value={val}>{children}</UserContext.Provider>
}