// actions.js

// Action Types
export const SET_USER = 'SET_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOAD_CART = 'LOAD_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

// Action Creators
export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const loginSuccess = (user, token) => ({
    type: LOGIN_SUCCESS,
    payload: { user, token }
});

export const logout = () => ({
    type: LOGOUT
});

export const loadCart = (cart) => ({
    type: LOAD_CART,
    payload: cart,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});
