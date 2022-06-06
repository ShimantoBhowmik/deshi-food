import { createContext, useState, useEffect } from "react";


import { getCollectionAndDocuments } from "../utils/firebase/firebase.js";
//used to import data
// import SHOP_DATA from '../data.js';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    //used to push data to database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCollectionAndDocuments();
            
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);


    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}

