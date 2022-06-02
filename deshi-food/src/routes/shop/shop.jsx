import { useContext } from "react";

import { FoodContext } from "../../contexts/food-cotext";
import FoodCard from "../../components/food-card/food-card";

import './shop.scss';

const Shop = () => {
    const { foods } = useContext(FoodContext);
    return(
        <div className = "food-container">
            {foods.map((food) => (
                <FoodCard key={food.id} food = {food}/>
            ))}
        </div>
    )
}


export default Shop;