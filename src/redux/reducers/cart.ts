import { ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_ITEM_FROM_CART, PLUS_PIZZA_ITEM, MINUS_PIZZA_ITEM } from './../types';
import { RootState } from './index';

export interface IPizzaItemInCart {
    id: string,
    imageUrl: string,
    name: string,
    type: string
    size: number,
    price: number,
};

type itemsInState = {
    [id: string]: Array<IPizzaItemInCart>
};

interface ICartState {
    totalPrice: number,
    totalCount: number,
    items: itemsInState
};

interface IAddPizzaToCartAction {
    type: typeof ADD_PIZZA_TO_CART,
    payload: IPizzaItemInCart
};

interface IClearCartAction {
    type: typeof CLEAR_CART,
};

interface IRemoveItemFromCartAction {
    type: typeof REMOVE_ITEM_FROM_CART,
    payload: string
};

interface IPlusPizzaAction {
    type: typeof PLUS_PIZZA_ITEM,
    payload: string
};

interface IMinusPizzaAction {
    type: typeof MINUS_PIZZA_ITEM,
    payload: string
};

export type CartActionTypes = IAddPizzaToCartAction | IClearCartAction | IRemoveItemFromCartAction | IMinusPizzaAction | IPlusPizzaAction;

export const getCartState = (rootState: RootState): ICartState => (rootState.cart);

const getAllPizza = (newItems: itemsInState): IPizzaItemInCart[] => {
    return Object.values(newItems).flat();
}

const getTotalPrice = (allPizzas: IPizzaItemInCart[]): number => {
    return allPizzas.reduce((sum, obj) => sum += obj.price!, 0);
}

const initialState: ICartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const cartReducer = (state = initialState, action: CartActionTypes): ICartState => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const newItems: itemsInState = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            };
            const allPizzas: IPizzaItemInCart[] = getAllPizza(newItems);
            const totalPrice: number = getTotalPrice(allPizzas);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice

            }
        }

        case CLEAR_CART: {
            return initialState;
        }

        case REMOVE_ITEM_FROM_CART: {
            const newItems: itemsInState = {
                ...state.items
            };
            delete newItems[action.payload];
            const allPizzas: IPizzaItemInCart[] = getAllPizza(newItems);
            const totalPrice: number = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }

        case PLUS_PIZZA_ITEM: {
            const newItems: itemsInState = {
                ...state.items,
                [action.payload]: [...state.items[action.payload], state.items[action.payload][0]]
            };
            const allPizzas: IPizzaItemInCart[] = getAllPizza(newItems);
            const totalPrice: number = getTotalPrice(allPizzas);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }

        case MINUS_PIZZA_ITEM: {
            const oldItems: IPizzaItemInCart[] = state.items[action.payload];
            const newItems: itemsInState = {
                ...state.items,
                [action.payload]: oldItems.length > 1 ? [...state.items[action.payload].slice(1)] : oldItems
            };
            const allPizzas: IPizzaItemInCart[] = getAllPizza(newItems);
            const totalPrice: number = getTotalPrice(allPizzas);
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
