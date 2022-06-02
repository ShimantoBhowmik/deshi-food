import { useContext } from 'react';

import { CartContext } from '../../contexts/shopping-context';

import React from 'react';

import Button from '../button/button';
import FoodItem from '../food-item/food-item';

import './dropdown.scss'; 


const Dropdown = () =>{

    const { cartItems } = useContext(CartContext);

    return(
        <div className="dropdown">
            <div className="items">
                {cartItems.map((item) => (<FoodItem key = {item.id} cartItem={item}/>))}
            </div>
            <Button buttonType='inverted' > CHECKOUT</Button>
        </div>
    )

}

export default Dropdown;