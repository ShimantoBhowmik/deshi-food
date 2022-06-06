import { userReducer } from "./User/user";


import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    user: userReducer
});