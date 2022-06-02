import './food-card.scss';
import Button from '../button/button';

const FoodCard = ({ food }) =>{

    const{name, price,imageUrl} = food;

    return (<div className = "food-card-container">
        <img src = {imageUrl} alt={`${name}`}/>
        <div className="content">
            <span className="name">{name}</span>
            <span className="cost">{price}</span>
        </div>
        <Button buttonType='inverted'> Add to cart</Button>
    </div>)
}

export default FoodCard;

