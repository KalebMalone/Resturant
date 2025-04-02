import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 80px;
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
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const CheckoutButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  &:hover {
    background-color: black;
  }
`;

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    return (
        <CartContainer>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <CartItem key={index}>
                            <span>{item.name} - ${item.price}</span>
                            <RemoveButton onClick={() => removeFromCart(index)}>Remove</RemoveButton>
                        </CartItem>
                    ))}
                    <CheckoutButton onClick={() => navigate('/checkout')}>Proceed to Checkout</CheckoutButton>
                </>
            )}
        </CartContainer>
    );
};

export default Cart;
