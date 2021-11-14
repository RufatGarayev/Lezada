import { ActionType } from "./actionTypes";
import axios from "axios";

export const GetProducts = () => (dispatch: any) => {
    dispatch({ type: ActionType.GET_PRODUCTS_START });
    axios
        .get("https://fakestoreapi.com/products")
        .then(response => dispatch({ type: ActionType.GET_PRODUCTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: ActionType.GET_PRODUCTS_ERROR, payload: error }))
};

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

export const SearchProduct = (searchValue: string) => {
    return {
        type: ActionType.SEARCH_PRODUCT, payload: searchValue
    }
};