import { PrimaryAction, ActionType } from '../actions/actionTypes';

const initialState = {
    showSidebarMenu: false,
    showSidebarCart: false,
    showSidebarFilter: false
};

const primaryReducer = (state = initialState, action: PrimaryAction) => {
    switch (action.type) {
        // show sidebar menu
        case ActionType.SHOW_SIDEBAR_MENU:
            return { ...state, showSidebarMenu: state.showSidebarMenu = action.payload }

        // show sidebar cart
        case ActionType.SHOW_SIDEBAR_CART:
            return { ...state, showSidebarCart: state.showSidebarCart = action.payload }

        // show sidebar filter
        case ActionType.SHOW_SIDEBAR_FILTER:
            return { ...state, showSidebarFilter: state.showSidebarFilter = action.payload }

        default:
            return state;
    }
};

export default primaryReducer;