import { CartActionTypes, IPizzaItemInCart } from './../reducers/cart';
import { ADD_PIZZA_TO_CART } from './../types';


export const addPizzaToCart = (pizzaObj: IPizzaItemInCart): CartActionTypes => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj
    }
}