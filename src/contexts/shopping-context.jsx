import { createContext, useReducer } from "react";


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

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemNumber: 0,
    cartTotal: 0
};

const CART_ACTIONS = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN'
}
const cartReducer = (state, action) =>{
    const{ type, payload} = action;


    switch(type){
        
        case CART_ACTIONS.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }

        case CART_ACTIONS.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        
        default:
            throw new Error(`Unhandled exception ${type} in cartReducer method`)

    }
}


export const CartProvider = ({children}) =>{
    

    const[{cartItems, isCartOpen, cartItemNumber, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);




    const updateCartReducer = (newCartItems) =>{
        const newItemNumber = newCartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity* cartItem.price,0);
        dispatch({type: CART_ACTIONS.SET_CART_ITEMS, payload: {cartItems: newCartItems, cartTotal: newCartTotal, cartItemNumber: newItemNumber}});

    }

    const addItemToCart = (foodToAdd) =>{
        const newCartItems = addCartItem(cartItems, foodToAdd);
        updateCartReducer(newCartItems);
    }

    const removeItemFromCart = (foodToRemove) =>{
        const newCartItems = removeCartItem(cartItems, foodToRemove);
        updateCartReducer(newCartItems);
    }
    const clearItemFromCart = (foodToClear) =>{
        const newCartItems = clearCartItem(cartItems, foodToClear);
        updateCartReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch({type:CART_ACTIONS.SET_CART_OPEN, payload:bool});
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartItemNumber, cartTotal};    

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
} 