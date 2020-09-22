// import { RootState } from './index';
import { SET_CATEGORY } from './../types';

export type CategoryItem = number | null;

interface IFiltersState {
    category: CategoryItem,
    sortBy: string
};

interface ISetCategoryAction {
    type: typeof SET_CATEGORY,
    payload: CategoryItem
}

export type FiltersActionTypes = ISetCategoryAction;

// export const getFiltersState = (rootState: RootState):IFiltersState  => (rootState.filters);

const initialState: IFiltersState = {
    category: null,
    sortBy: 'popular',
};

export const filtersReducer = (state = initialState, action: FiltersActionTypes): IFiltersState => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}