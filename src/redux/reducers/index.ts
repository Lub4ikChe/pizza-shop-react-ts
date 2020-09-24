import { cartReducer } from './cart';
import { combineReducers } from "redux";

import { pizzazsReducer } from './pizzazs';
import { filtersReducer } from './filters';

export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzazs: pizzazsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>