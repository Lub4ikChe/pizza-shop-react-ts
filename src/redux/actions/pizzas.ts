import { CategoryItem, SortByItem } from './../reducers/filters';
import { RootState } from './../reducers/index';
import { IPizzaItem } from './../../interfaces';
import { SET_PIZZAS, SET_ISLOADED } from './../types';
import { ThunkAction } from 'redux-thunk';
import { PizzaActionTypes } from "../reducers/pizzazs";
import axios from 'axios';

export const setPizzas = (items: IPizzaItem[]): PizzaActionTypes => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}

export const setIsLoaded = (status: boolean): PizzaActionTypes => {
    return {
        type: SET_ISLOADED,
        payload: status
    }
}


export const fetchPizzas = (sortBy: SortByItem, category: CategoryItem):
    ThunkAction<
        void,
        RootState,
        undefined,
        PizzaActionTypes
    > => (dispatch) => {
        dispatch(setIsLoaded(false));
        const link: string = `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`;
        axios.get<IPizzaItem[]>(link)
            .then(({ data }) => {
                dispatch(setPizzas(data));
            });
    }