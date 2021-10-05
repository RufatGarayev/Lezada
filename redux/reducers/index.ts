import { combineReducers } from 'redux';
import productReducer from "./productReducer";
import cartReducer from './cartReducer';
import primaryReducer from './primaryReducer';

const reducers = combineReducers({
    primary: primaryReducer,
    products: productReducer,
    cart: cartReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>