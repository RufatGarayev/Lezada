import { ActionType } from "./actionTypes";
import { IProducts } from "../../data/products";
import axios from "axios";


export const GetProducts = () => (dispatch: any) => {
    axios
        // .get("http://localhost:3000/api/products")
        .get("https://fakestoreapi.com/products")
        .then(response =>
            dispatch({ type: ActionType.GET_PRODUCTS, payload: response.data })
        )
};