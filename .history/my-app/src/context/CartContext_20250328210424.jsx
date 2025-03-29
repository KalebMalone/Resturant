import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Cart Provider component to wrap around your application
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load the cart from localStorage on app load
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Add item to the cart and save to localStorage
    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Remove item from cart and save to localStorage
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getCartItemCount = () => cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
