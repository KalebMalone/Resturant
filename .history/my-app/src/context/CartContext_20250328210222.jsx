// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Cart Provider component to wrap around your application
export const CartProvider = ({ children }) => {
    // Retrieve the cart from localStorage or initialize it as an empty array
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

    const [cart, setCart] = useState(initialCart);

    // Update localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
