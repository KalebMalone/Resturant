import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  &:hover {
    background-color: black;
  }
`;

const Checkout = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment successful!');
        navigate('/');
    };

    return (
        <CheckoutContainer>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Card Number" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    required
                />
                <Input 
                    type="text" 
                    placeholder="Expiry Date (MM/YY)" 
                    value={expiry} 
                    onChange={(e) => setExpiry(e.target.value)} 
                    required
                />
                <Input 
                    type="text" 
                    placeholder="CVV" 
                    value={cvv} 
                    onChange={(e) => setCvv(e.target.value)} 
                    required
                />
                <SubmitButton type="submit">Pay Now</SubmitButton>
            </form>
        </CheckoutContainer>
    );
};

export default Checkout;
