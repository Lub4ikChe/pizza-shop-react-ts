import { ADD_PIZZA_TO_CART } from './../types';
import { RootState } from './index';

export interface IPizzaItemInCart {
    id: number,
    imageUrl: string,
    name: string,
    type: string
    size: number,
    price: number,
}

interface ICartState {
    totalPrice: number,
    totalCount: number,
    items: {
        [id: number]: Array<IPizzaItemInCart>
    },
};

interface IAddPizzaToCartAction {
    type: typeof ADD_PIZZA_TO_CART,
    payload: IPizzaItemInCart
};

export type CartActionTypes = IAddPizzaToCartAction;

export const getCartState = (rootState: RootState): ICartState => (rootState.cart);

const initialState: ICartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const cartReducer = (state = initialState, action: CartActionTypes): ICartState => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            };
            const allPizzas = ([] as IPizzaItemInCart[]).concat.apply([], Object.values(newItems));
            const totalPrice = allPizzas.reduce((sum, obj) => sum += obj.price, 0);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice

            }
        }

        default:
            return state
    }
}