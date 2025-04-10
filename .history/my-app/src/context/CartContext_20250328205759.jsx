// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Cart Provider component to wrap around your application
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const getCartItemCount = () => cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
