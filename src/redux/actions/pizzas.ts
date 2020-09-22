import { IPizzaItem } from './../../interfaces';
import { SET_PIZZAS } from './../types';
import { PizzaActionTypes } from "../reducers/pizzazs"

export const setPizzas = (items: IPizzaItem[]): PizzaActionTypes => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}