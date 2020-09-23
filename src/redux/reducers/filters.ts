import { RootState } from './index';
import { SET_CATEGORY, SET_SORT_TYPE } from './../types';

export type CategoryItem = number | null;
export type SortByItem = { type: string, order: string, name?: string };

interface IFiltersState {
    category: CategoryItem,
    sortBy: SortByItem
};

interface ISetCategoryAction {
    type: typeof SET_CATEGORY,
    payload: CategoryItem
};

interface ISetSortTypeAction {
    type: typeof SET_SORT_TYPE,
    payload: SortByItem
};

export type FiltersActionTypes = ISetCategoryAction | ISetSortTypeAction;

export const getFiltersState = (rootState: RootState): IFiltersState => (rootState.filters);

const initialState: IFiltersState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc',
    },
};

export const filtersReducer = (state = initialState, action: FiltersActionTypes): IFiltersState => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };

        case SET_SORT_TYPE:
            return {
                ...state,
                sortBy: action.payload
            }

        default:
            return state
    }
}