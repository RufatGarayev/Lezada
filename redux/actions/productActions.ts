import { ActionType } from "./actionTypes";
import axios from "axios";

export const GetProducts = () => (dispatch: any) => {
    dispatch({ type: ActionType.GET_PRODUCTS_START });
    axios
        .get("http://localhost:3000/api/products")
        .then(response => dispatch({ type: ActionType.GET_PRODUCTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: ActionType.GET_PRODUCTS_ERROR, payload: error }))
};

// export const GetSingleProduct = () => (dispatch: any, context: any) => {
//     dispatch({ type: ActionType.GET_SINGLE_PRODUCT_START });
//     axios
//         .get(`http://localhost:3000/api/products/${context.params.id}`)
//         .then(response => dispatch({ type: ActionType.GET_SINGLE_PRODUCT_SUCCESS, payload: response.data }))
//         .catch(error => dispatch({ type: ActionType.GET_SINGLE_PRODUCT_ERROR, payload: error }))
// };

export const SortByPrice = (selectValue: string) => {
    return {
        type: ActionType.SORT_BY_PRICE, payload: selectValue
    }
};

export const SortByCategory = (title: string) => {
    return {
        type: ActionType.SORT_BY_CATEGORY, payload: title
    }
};