export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});
