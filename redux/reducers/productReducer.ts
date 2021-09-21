import { ActionType, ProductAction } from "../actions/actionTypes";
import { IProducts } from '../../data/products';

interface IProductReducerState {
    products: IProducts[];
    isLoading: boolean;
    message: string;
};

const initialState = {
    products: [],
    isLoading: false,
    message: ""
};

const productReducer = (state: IProductReducerState = initialState, action: ProductAction) => {
    switch (action.type) {
        // get products
        case ActionType.GET_PRODUCTS_START:
            return { ...state, isLoading: true, message: "Loading..." };
        case ActionType.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, isLoading: false };
        case ActionType.GET_PRODUCTS_ERROR:
            return { ...state, message: action.payload, isLoading: false };

        default:
            return state;
    }
};

export default productReducer;