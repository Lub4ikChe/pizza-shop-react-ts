import { SET_CATEGORY } from './../types';
import { FiltersActionTypes, CategoryItem } from './../reducers/filters';

export const setCategory = (categoryIndex: CategoryItem): FiltersActionTypes => {
    return {
        type: SET_CATEGORY,
        payload: categoryIndex
    }
}