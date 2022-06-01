import { createContext, useState } from "react";

export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
    const[currUser, setCurrUser] = useState(null);
    const val= { currUser, setCurrUser};

    return <UserContext.Provider value={val}>{children}</UserContext.Provider>
}