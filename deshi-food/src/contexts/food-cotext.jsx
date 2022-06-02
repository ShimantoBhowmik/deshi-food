import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.js";
//used to import data
//import SHOP_DATA from '../data.js';


export const FoodContext = createContext({
    foods: [],
});

export const FoodProvider = ({children}) => {
    const [foods] = useState([]);

    //used to push data to database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCollectionAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    }, []);


    const value = {foods};

    return(
        <FoodContext.Provider value={value}> {children} </FoodContext.Provider>
    )
}

