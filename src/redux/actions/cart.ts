import { CartActionTypes, IPizzaItemInCart } from './../reducers/cart';
import { ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_ITEM_FROM_CART, PLUS_PIZZA_ITEM, MINUS_PIZZA_ITEM } from './../types';


export const addPizzaToCart = (pizzaObj: IPizzaItemInCart): CartActionTypes => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj
    }
}

export const clearCart = (): CartActionTypes => {
    return {
        type: CLEAR_CART
    }
}


export const removeItemFromCart = (id: string): CartActionTypes => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: id
    }
}

export const plusPizza = (id: string): CartActionTypes => {
    return {
        type: PLUS_PIZZA_ITEM,
        payload: id
    }
}

export const minusPizza = (id: string): CartActionTypes => {
    return {
        type: MINUS_PIZZA_ITEM,
        payload: id
    }
}