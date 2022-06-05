import FoodCard from '../../components/food-card/food-card';

import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories-cotext';

import './category.scss';



const Category = () =>{
    
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const[products, setProducts] = useState([categoriesMap[category]]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

     return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <FoodCard key={product.id} food={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;