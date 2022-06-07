import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview-routes/categories-preview';
import Category from '../category-route/category';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store/categories/category-action';

import './shop.scss';

const Shop = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCollectionAndDocuments();
            
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, [dispatch]);

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    )
}


export default Shop;