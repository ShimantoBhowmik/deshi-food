import { CATEGORIES_ACTION_TYPE } from "./category-types";

import { createAction } from "../../utils/reducer/reducer";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);