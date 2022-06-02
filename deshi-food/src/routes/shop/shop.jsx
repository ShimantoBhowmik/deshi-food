import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories-cotext";
import FoodCard from "../../components/food-card/food-card";

import './shop.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return(
        <Fragment>   
                {
                    Object.keys(categoriesMap).map((title) => (
                        <Fragment>
                            <h2>{title}</h2>
                            <div className = "food-container">
                            {categoriesMap[title].map((food) => (
                                <FoodCard key={food.id} food = {food}/>
                            ))}
                            </div>
                        </Fragment>
                        
                    ))
                }
        
        </Fragment>
    )
}


export default Shop;