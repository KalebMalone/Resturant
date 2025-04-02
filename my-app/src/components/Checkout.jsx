import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { useCart } from "../context/CartContext"; // Import cart context

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
    background-color: darkgray;
  }
`;

const Checkout = () => {
  const { cart, clearCart } = useCart(); // Get cart items and clearCart function
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  const sendReceipt = () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Format the cart items to match the expected structure in the template
    const orderDetails = cart.map((item) => ({
      image_url: item.image_url, // Ensure your cart items contain image_url
      name: item.name,
      units: item.quantity,
      price: item.price.toFixed(2), // Ensure price is a number
    }));

    const emailParams = {
      user_email: email, // The recipient's email (should match template placeholder)
      order_id: `#${Math.floor(Math.random() * 1000000)}`, // Generate a fake order ID (or use a real one)
      orders: orderDetails, // Pass the cart items formatted as orders
      cost: {
        shipping: 5.99, // Example, replace with actual shipping cost
        tax: 1.99, // Example, replace with actual tax
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0) + 5.99 + 1.99, // Total calculation
      },
    };

    emailjs
      .send(
        "service_xynyeur", // Your EmailJS Service ID
        "template_qtkcb9a", // Your EmailJS Template ID
        emailParams,
        "D0V8ORrzpKUX8B70_" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Receipt sent:", result.text);
          alert("Email receipt sent!");
          resetForm();
          clearCart(); // Clear the cart only after successful payment
        },
        (error) => {
          console.log("Error sending receipt:", error.text);
          alert("Failed to send receipt.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    sendReceipt(); // Send email receipt
    navigate("/"); // Redirect to home page
  };

  const resetForm = () => {
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setEmail("");
  };

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <form ref={form} onSubmit={handleSubmit}>
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
        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit">Pay Now</SubmitButton>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
