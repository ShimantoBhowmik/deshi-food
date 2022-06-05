import { useContext } from 'react';

import {ReactComponent as Icon} from '../../assets/shopping-cart.svg' 

import { CartContext } from '../../contexts/shopping-context';


import './shopping-cart.scss';


const ShoppingCart = () =>{
    const{ isCartOpen ,setIsCartOpen, cartItemNumber} = useContext(CartContext);

    const toggle = () => setIsCartOpen(!isCartOpen);
    
    return(
        <div className="icon-container" onClick={toggle}>
            <Icon className="shopping-icon"/>
            <span className="count"> {cartItemNumber} </span>
        </div>
    )

}

export default ShoppingCart;