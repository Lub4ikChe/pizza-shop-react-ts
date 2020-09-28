import { RootState } from './index';
import { SET_PIZZAS, SET_ISLOADED } from './../types';

export interface IPizzaItem {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number,
}

interface IPizzasState {
    items: Array<IPizzaItem>,
    isLoaded: boolean,
};

interface ISetPizzasAction {
    type: typeof SET_PIZZAS,
    payload: Array<IPizzaItem>
};

interface ISetIsLoadedAction {
    type: typeof SET_ISLOADED,
    payload: boolean
};

export type PizzaActionTypes = ISetPizzasAction | ISetIsLoadedAction;

export const getPizzaState = (rootState: RootState): IPizzasState => (rootState.pizzazs);

const initialState: IPizzasState = {
    items: [],
    isLoaded: false,
};

export const pizzazsReducer = (state = initialState, action: PizzaActionTypes): IPizzasState => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case SET_ISLOADED:
            return {
                ...state,
                isLoaded: action.payload
            };

        default:
            return state
    }
}