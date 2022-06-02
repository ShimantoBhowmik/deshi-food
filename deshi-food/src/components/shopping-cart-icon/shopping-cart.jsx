import {ReactComponent as Icon} from '../../assets/shopping-cart.svg' 

import './shopping-cart.scss';


const ShoppingCart = () =>{
    return(
        <div className="icon-container">
            <Icon className="shopping-icon"/>
            <span className="count"> 0 </span>
        </div>
    )

}

export default ShoppingCart;