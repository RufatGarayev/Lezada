import { ActionType } from '../actions/actionTypes';


export const ShowSidebarMenu = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_MENU, payload: trueOrFalse
    }
};

export const ShowSidebarCart = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_CART, payload: trueOrFalse
    }
};

export const ShowSidebarFilter = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_FILTER, payload: trueOrFalse
    }
};