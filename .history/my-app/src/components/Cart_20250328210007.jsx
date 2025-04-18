// src/components/Cart.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';  // Import the custom hook

const CartContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const Cart = () => {
  const { cart, setCart } = useCart();  // Get cart state and setCart function from context

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index}>
            <span>{item.name} - ${item.price}</span>
            <RemoveButton onClick={() => removeFromCart(index)}>Remove</RemoveButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
