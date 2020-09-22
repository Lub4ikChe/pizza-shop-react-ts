import { RootState } from './index';
import { SET_PIZZAS } from './../types';
import { IPizzaItem } from './../../interfaces';

interface IPizzasState {
    items: Array<IPizzaItem>
};

interface ISetPizzasAction {
    type: typeof SET_PIZZAS,
    payload: Array<IPizzaItem>
}

export type PizzaActionTypes = ISetPizzasAction;

export const getPizzaState = (rootState: RootState): IPizzasState => (rootState.pizzazs);

const initialState: IPizzasState = {
    items: []
};

export const pizzazsReducer = (state = initialState, action: PizzaActionTypes): IPizzasState => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload
            }

        default:
            return state
    }
}