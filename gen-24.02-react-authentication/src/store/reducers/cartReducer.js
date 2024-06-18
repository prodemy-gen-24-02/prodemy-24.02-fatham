const initialState = {
    token: null,
    user: null,
    cart: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOAD_CART':
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};
