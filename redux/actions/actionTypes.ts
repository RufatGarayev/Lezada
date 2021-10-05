import { IProducts } from "../../data/products";

export enum ActionType {
    // primary action types
    SHOW_SIDEBAR_MENU = "SHOW_SIDEBAR_MENU",
    SHOW_SIDEBAR_FILTER = "SHOW_SIDEBAR_FILTER",
    SHOW_SIDEBAR_CART = "SHOW_SIDEBAR_CART",

    // product action types
    GET_PRODUCTS_START = "GET_PRODUCTS_START",
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
    SORT_BY_PRICE = "SORT_BY_PRICE",
    SORT_BY_CATEGORY = "SORT_BY_CATEGORY",
    SEARCH_PRODUCT = "SEARCH_PRODUCT",

    // cart action types
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    CLEAR_CART = "CLEAR_CART",
    INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT",
    DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT"
};


// interfaces for primary actions
interface ShowSidebarMenuAction {
    type: ActionType.SHOW_SIDEBAR_MENU,
    payload: boolean;
};

interface ShowSidebarCartAction {
    type: ActionType.SHOW_SIDEBAR_CART,
    payload: boolean;
};

interface ShowSidebarFilterAction {
    type: ActionType.SHOW_SIDEBAR_FILTER,
    payload: boolean;
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

interface SortByPriceAction {
    type: ActionType.SORT_BY_PRICE;
    payload: string;
};

interface SortByCategoryAction {
    type: ActionType.SORT_BY_CATEGORY;
    payload: string;
};

interface SearchProductAction {
    type: ActionType.SEARCH_PRODUCT;
    payload: string;
};


// interfaces for cart actions
interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: IProducts;
};

interface RemoveFromCartAction {
    type: ActionType.DELETE_FROM_CART;
    payload: number;
};

interface IncreaseAction {
    type: ActionType.INCREASE_PRODUCT_COUNT;
    payload: number;
};

interface DecreaseAction {
    type: ActionType.DECREASE_PRODUCT_COUNT;
    payload: number;
};

interface ClearCartAction {
    type: ActionType.CLEAR_CART;
};


export type PrimaryAction = ShowSidebarMenuAction | ShowSidebarCartAction |
    ShowSidebarFilterAction;

export type ProductAction = GetProductsStartAction | GetProductsSuccessAction |
    GetProductsErrorAction | SortByPriceAction | SortByCategoryAction | SearchProductAction;

export type CartAction = AddToCartAction | RemoveFromCartAction | IncreaseAction |
    DecreaseAction | ClearCartAction;