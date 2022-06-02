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

const removeCartItem = (cartItems, foodToRemove) =>{
    const existingFood = cartItems.find((cartItem) => cartItem.id === foodToRemove.id)
    
    //if item number is equal to 1
    if (existingFood.quantity ===1) {
    return cartItems.filter(cartItem => cartItem.id !== foodToRemove.id);
  }

   return cartItems.map((cartItem) =>
      cartItem.id === foodToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}

const clearCartItem = (cartItems, foodToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== foodToClear.id);

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () =>{},
    removeItemFromCart: () =>{},
    clearItemFromCart: () =>{},
    cartItemNumber: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) =>{
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartItemNumber, setCartItemNumber] = useState(0);
    const[cartTotal, setCartTotal] = useState(0);


    useEffect( () =>{
        const newItemNumber = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCartItemNumber(newItemNumber);
    }, [cartItems])

    useEffect( () =>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity* cartItem.price,0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (foodToAdd) =>{
        setCartItems(addCartItem(cartItems, foodToAdd));
    }

    const removeItemFromCart = (foodToRemove) =>{
        setCartItems(removeCartItem(cartItems, foodToRemove));
    }
    const clearItemFromCart = (foodToClear) =>{
        setCartItems(clearCartItem(cartItems, foodToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartItemNumber, cartTotal};    

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
} 