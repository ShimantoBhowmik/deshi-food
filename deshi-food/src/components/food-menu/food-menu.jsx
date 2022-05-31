import FoodItem from '../category-item/food-item';

import './food-menu.scss';

const FoodMenu = ({ foods }) => {
  return (
    <div className='food-menu'>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodMenu;