import { useContext } from 'react';

import Button from '../button/button';
import { CartContext } from '../../contexts/shopping-context';


import './food-card.scss';


const FoodCard = ({ food }) =>{

    const{name, price, imageUrl} = food;

    const{ addItemToCart } = useContext(CartContext);

    const addFoodToCart = () => addItemToCart(food);

    return (<div className = "food-card-container">
        <img src = {imageUrl} alt={`${name}`}/>
        <div className="content">
            <span className="name">{name}</span>
            <span className="cost">{price}</span>
        </div>
        <Button buttonType='inverted' onClick = {addFoodToCart}> Add to cart</Button>
    </div>)
}

export default FoodCard;

