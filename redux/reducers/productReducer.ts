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
            return { ...state, isLoading: true };
        case ActionType.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, isLoading: false };
        case ActionType.GET_PRODUCTS_ERROR:
            return { ...state, message: action.payload, isLoading: false };

        // sorting products by latest and price
        case ActionType.SORT_BY_PRICE:
            const sortedProducts = state.products.slice();

            if (action.payload === "lowPrice") {
                sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
            } else if (action.payload === "highPrice") {
                sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
            } else {
                sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
            }

            return {
                ...state,
                products: sortedProducts
            }

        // sorting products by category 
        case ActionType.SORT_BY_CATEGORY:
            const sortByCategory = state.products.filter((product: IProducts) =>
                product.category.indexOf(action.payload) !== -1)

            return {
                ...state,
                products: sortByCategory
            }

        // search product 
        case ActionType.SEARCH_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product: IProducts) => (
                    product.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                ))
            }

        default:
            return state;
    }
};

export default productReducer;