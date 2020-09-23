import { SET_CATEGORY, SET_SORT_TYPE } from './../types';
import { FiltersActionTypes, CategoryItem, SortByItem } from './../reducers/filters';

export const setCategory = (categoryIndex: CategoryItem): FiltersActionTypes => {
    return {
        type: SET_CATEGORY,
        payload: categoryIndex
    }
}

export const setSortType = (sortObj: SortByItem): FiltersActionTypes => {
    return {
        type: SET_SORT_TYPE,
        payload: sortObj
    }
}

