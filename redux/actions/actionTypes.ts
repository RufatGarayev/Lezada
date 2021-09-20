import { IProducts } from "../../data/products";

export enum ActionType {
    // product action types
    GET_PRODUCTS = "GET_PRODUCTS"
};


// interfaces for product actions
interface GetProductsAction {
    type: ActionType.GET_PRODUCTS;
    payload: IProducts[];
};


export type ProductAction = GetProductsAction;