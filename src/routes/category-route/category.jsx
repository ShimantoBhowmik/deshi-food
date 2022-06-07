import FoodCard from '../../components/food-card/food-card';

import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/category-selector';

import './category.scss';



const Category = () =>{
    
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const[products, setProducts] = useState([categoriesMap[category]]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

     return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products
          .map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;