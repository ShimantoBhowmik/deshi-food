import {Routes, Route} from 'react-router-dom';

import CategoriesPreview from '../categories-preview-routes/categories-preview';
import Category from '../category-route/category';


import './shop.scss';

const Shop = () => {
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    )
}


export default Shop;