import { useContext } from 'react';


import { CartContext } from '../../contexts/shopping-context';


import './checkoutPage.scss'

const CheckOutPage = () =>{
    const{ cartItems, addItemToCart} = useContext(CartContext);

    return(
        <div>
            CheckOut page
            <div>
                {
                    cartItems.map((cartItem) => {
                        const{id, name, quantity} = cartItem;
                        return <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span onClick={() =>addItemToCart(cartItem)}>increase</span>
                            <br/>
                            <span onClick={() =>addItemToCart(cartItem)}>decrease</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


export default CheckOutPage;