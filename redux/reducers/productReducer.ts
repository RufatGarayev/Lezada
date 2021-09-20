import { ActionType, ProductAction } from "../actions/actionTypes";
import { IProducts } from '../../data/products';

interface IProductReducerState {
    products: IProducts[];
}

const initialState = {
    products: []
};

const productReducer = (state: IProductReducerState = initialState, action: ProductAction) => {
    switch (action.type) {
        // get products
        case ActionType.GET_PRODUCTS:
            return { ...state, products: action.payload }

        default:
            return state;
    }
};

export default productReducer;