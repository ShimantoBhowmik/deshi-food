import { userReducer } from "./user/user";


import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category-reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
});