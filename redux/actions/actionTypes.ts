import { IProducts } from "../../data/products";

export enum ActionType {
    // product action types
    GET_PRODUCTS_START = "GET_PRODUCTS_START",
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
};


// interfaces for product actions
interface GetProductsStartAction {
    type: ActionType.GET_PRODUCTS_START;
};

interface GetProductsSuccessAction {
    type: ActionType.GET_PRODUCTS_SUCCESS;
    payload: IProducts[];
};

interface GetProductsErrorAction {
    type: ActionType.GET_PRODUCTS_ERROR;
    payload: string;
};


export type ProductAction = GetProductsStartAction | GetProductsSuccessAction | GetProductsErrorAction;