import { combineReducers } from "redux";

import { pizzazsReducer } from './pizzazs';
import { filtersReducer } from './filters';

export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzazs: pizzazsReducer
});

export type RootState = ReturnType<typeof rootReducer>