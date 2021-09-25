import { combineReducers } from 'redux';
import productReducer from "./productReducer";
import cartReducer from './cartReducer';

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>