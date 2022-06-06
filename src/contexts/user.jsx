import { createContext, useEffect, useReducer } from "react";
import { Listener,createUserDoc } from "../utils/firebase/firebase";


export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null,
});


export const ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    
    const {type, payload } = action;

    switch(type){
        case ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currUser: payload
        }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);

    }
}

const INITIAL_STATE = {
    currUser: null
}

export const UserProvider = ({ children }) => {
    
    
    const[{currUser}, dispatch] = useReducer(userReducer, INITIAL_STATE );
    

    const setCurrUser = (user) => {
        dispatch({type:ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

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