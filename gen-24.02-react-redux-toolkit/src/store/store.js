import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the cart
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.push(product);
            }
        },
        loadCart: (state, action) => {
            return action.payload;
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, loadCart, removeFromCart } = cartSlice.actions;

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export default store;
