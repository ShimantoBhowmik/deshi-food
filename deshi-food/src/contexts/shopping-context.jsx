import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, foodToAdd) =>{
    const existingFood = cartItems.find((cartItem) => cartItem.id === foodToAdd.id)

    if (existingFood) {
    return cartItems.map((cartItem) =>
      cartItem.id === foodToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }


    return [...cartItems, { ...foodToAdd, quantity:1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () =>{},
    cartItemNumber: 0
});

export const CartProvider = ({children}) =>{
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartItemNumber, setCartItemNumber] = useState(0);


    useEffect( () =>{
        const newItemNumber = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCartItemNumber(newItemNumber);
    }, [cartItems])

    const addItemToCart = (foodToAdd) =>{
        setCartItems(addCartItem(cartItems, foodToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemNumber};    

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
} 