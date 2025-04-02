import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useCart } from '../context/CartContext';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

    background-image: url('/images/MenuBack.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const MenuHeading = styled.h1`
  font-size: 36px;
  color: rgb(71, 63, 63);
  text-align: center;
  margin-bottom: 40px;
  background-color: white;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
`;

const CategoryHeading = styled.h2`
  font-size: 28px;
  color: white;
  text-align: center;
  margin-top: 30px;
  /* Removed background and box-shadow for no container look */
`;

const MenuItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuItemCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    color: rgb(71, 63, 63);
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  strong {
    font-size: 18px;
    color: rgb(71, 63, 63);
  }
`;

const AddToCartButton = styled.button`
  background-color: rgb(71, 63, 63);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: rgb(50, 45, 45);
  }
`;

const CartSummary = styled.div`
  margin-top: 40px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const OrderPage = () => {
  const [menuData, setMenuData] = useState({ starters: [], mains: [], desserts: [], drinks: [] });
  const { addToCart, cart } = useCart();

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/starters').then((res) => res.json()),
      fetch('http://localhost:5000/mains').then((res) => res.json()),
      fetch('http://localhost:5000/desserts').then((res) => res.json()),
      fetch('http://localhost:5000/drinks').then((res) => res.json()),
    ])
      .then(([starters, mains, desserts, drinks]) => setMenuData({ starters, mains, desserts, drinks }))
      .catch((error) => console.error('Error loading menu data:', error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart`);
  };

  const renderMenuItems = (category) => (
    category.length > 0 ? category.map((item, index) => (
      <MenuItemCard key={index}>
        {item.image && <img src={item.image} alt={item.name} />}
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
        <AddToCartButton onClick={() => handleAddToCart(item)}>Add to Cart</AddToCartButton>
      </MenuItemCard>
    )) : <p>No items available</p>
  );

  return (
    <>
      <GlobalStyle />
      <OrderContainer>
        <MenuHeading>Order Now</MenuHeading>
        <CategoryHeading>Starters</CategoryHeading>
        <MenuItemsGrid>{renderMenuItems(menuData.starters)}</MenuItemsGrid>
        <CategoryHeading>Main Courses</CategoryHeading>
        <MenuItemsGrid>{renderMenuItems(menuData.mains)}</MenuItemsGrid>
        <CategoryHeading>Desserts</CategoryHeading>
        <MenuItemsGrid>{renderMenuItems(menuData.desserts)}</MenuItemsGrid>
        <CategoryHeading>Drinks</CategoryHeading>
        <MenuItemsGrid>{renderMenuItems(menuData.drinks)}</MenuItemsGrid>
        <CartSummary>
          <h2>Cart</h2>
          <p>Items in cart: {cart.length}</p>
        </CartSummary>
      </OrderContainer>
    </>
  );
};

export default OrderPage;