import CategoryItem from '../category-item/category-item';

import './food-menu.scss';

const FoodMenu = ({ foods }) => {
  return (
    <div className='food-menu'>
      {foods.map((food) => (
        <CategoryItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodMenu;