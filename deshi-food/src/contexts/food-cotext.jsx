import { createContext, useState } from "react";
import FOODS from '../data.json';


export const FoodContext = createContext({
    foods: [],
});

export const FoodProvider = ({children}) => {
    const [foods, setFood] = useState(FOODS);
    const value = {foods};

    return(
        <FoodContext.Provider value={value}> {children} </FoodContext.Provider>
    )
}

