import { ActionType } from "./actionTypes";
import { IProducts } from "../../types/types";


export const AddToCart = (product: IProducts) => {
    return {
        type: ActionType.ADD_TO_CART, payload: product
    }
};

export const DeleteFromCart = (id: number) => {
    return {
        type: ActionType.DELETE_FROM_CART, payload: id
    }
};

export const ClearCart = () => {
    return {
        type: ActionType.CLEAR_CART
    }
};