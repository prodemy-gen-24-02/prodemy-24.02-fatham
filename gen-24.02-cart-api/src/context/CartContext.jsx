// import { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState({});

//     const addToCart = {
//         cart,
//         setCart,
//     };

//     return (
//         <CartContext.Provider value={addToCart}>
//             {children}
//         </CartContext.Provider>
//     );
// };

import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const productIndex = prevCart.findIndex((item) => item.id === product.id);
//             if (productIndex === -1) {
//                 // If the product is not in the cart, add it
//                 return [...prevCart, { ...product, quantity: 1 }];
//             } else {
//                 // If the product is already in the cart, update the quantity
//                 const updatedCart = [...prevCart];
//                 updatedCart[productIndex].quantity += 1;
//                 return updatedCart;
//             }
//         });
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };