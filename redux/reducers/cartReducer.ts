import { ActionType, CartAction } from "../actions/actionTypes";

export interface ICartProps {
    cart: any;
};

const initialState = {
    cart: []
};

const cartReducer = (state: ICartProps = initialState, action: CartAction) => {
    switch (action.type) {
        // add to cart
        case ActionType.ADD_TO_CART:
            let alreadyExists: boolean = false;

            state.cart.forEach((product: any) => {
                if (product.id === action.payload.id) {
                    alreadyExists = true;
                    product.count++;
                }
            });

            if (!alreadyExists) {
                state.cart.push({ ...action.payload, count: 1 });
            }

            return {
                ...state
            };

        // delete from cart
        case ActionType.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product: any) => product.id !== action.payload)
            };

        // clear cart
        case ActionType.CLEAR_CART:
            return {
                ...state, cart: []
            }

        // increasing product count
        case ActionType.INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: state.cart.map((product: any) => product.id === action.payload ?
                    { ...product, count: product.count + 1 } : product)
            };

        // decreasing product count
        case ActionType.DECREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: state.cart.map((product: any) => product.id === action.payload ?
                    { ...product, count: product.count - 1 } : product)
            };

        default:
            return state;
    }
};

export default cartReducer;