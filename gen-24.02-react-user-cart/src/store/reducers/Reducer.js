import { combineReducers } from 'redux';
import {
    SET_USER,
    LOGIN_SUCCESS,
    LOGOUT,
    LOAD_CART,
    ADD_TO_CART,
} from '../actions/Actions';

// Initial State
const initialUserState = {
    id: null,
    name: '',
    email: '',
};

const initialCartState = []; // Set initial state for cart to an empty array

// User Reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER:
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload.user };
        case LOGOUT:
            return { id: null, name: '', email: '' };
        default:
            return state;
    }
};

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case LOAD_CART:
            return action.payload; // Return the payload directly for LOAD_CART action
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;
