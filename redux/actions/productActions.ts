import { ActionType } from "./actionTypes";
// import { IProducts } from "../../data/products";
import axios from "axios";

export const GetProducts = () => (dispatch: any) => {
    dispatch({ type: ActionType.GET_PRODUCTS_START });
    axios
        .get("http://localhost:3000/api/products")
        .then(response => dispatch({ type: ActionType.GET_PRODUCTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: ActionType.GET_PRODUCTS_ERROR, payload: error }))
};