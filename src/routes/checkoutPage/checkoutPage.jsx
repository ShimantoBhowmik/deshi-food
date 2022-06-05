import { useContext } from 'react';


import { CartContext } from '../../contexts/shopping-context';




import './checkoutPage.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item';

const CheckOutPage = () =>{
    const{ cartItems, cartTotal } = useContext(CartContext);

    return(
        <div className="container">
            <div className="header">
                <div className="header-block">
                    <span>Food</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Amount</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }
            <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}


export default CheckOutPage;