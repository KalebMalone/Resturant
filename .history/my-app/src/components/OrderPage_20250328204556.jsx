import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useCart } from '../context/CartContext'; // Import the useCart hook

// Global reset for styles to eliminate unwanted background
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
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
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Other styled components...

const OrderPage = () => {
    const [menuData, setMenuData] = useState({
        starters: [],
        mains: [],
        desserts: [],
        drinks: [],
    });
    const { addToCart } = useCart(); // Access the addToCart function

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:5000/starters').then((response) => response.json()),
            fetch('http://localhost:5000/mains').then((response) => response.json()),
            fetch('http://localhost:5000/desserts').then((response) => response.json()),
            fetch('http://localhost:5000/drinks').then((response) => response.json())
        ])
            .then(([starters, mains, desserts, drinks]) => {
                setMenuData({ starters, mains, desserts, drinks });
            })
            .catch((error) => {
                console.error('Error loading menu data:', error);
            });
    }, []);

    const handleAddToCart = (item) => {
        addToCart(item);  // Now we use addToCart from context
        alert(`${item.name} added to cart`);
    };

    const renderMenuItems = (category) => {
      if (!category || category.length === 0) return <p>No items available</p>;
  
      return category.map((item, index) => (
          <MenuItemCard key={index}>
              {/* Image */}
              {item.image && (
                  <img
                      src={item.image}
                      alt={item.name}
                      style={{
                          width: '50%',
                          height: 'auto',
                          borderRadius: '8px',
                          marginBottom: '10px',
                      }}
                  />
              )}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>${item.price}</strong></p>
              <AddToCartButton onClick={() => handleAddToCart(item)}>
                  Add to Cart
              </AddToCartButton>
          </MenuItemCard>
      ));
  };

    return (
        <>
            <GlobalStyle />
            <OrderContainer>
                <MenuHeading>Order Now</MenuHeading>
                {/* Render categories like Starters, Mains, etc. */}
                <CategoryHeading>Starters</CategoryHeading>
                <MenuItemsGrid>
                    {menuData.starters.length > 0 ? renderMenuItems(menuData.starters) : <p>Loading Starters...</p>}
                </MenuItemsGrid>
                {/* More categories here */}
            </OrderContainer>
        </>
    );
};

export default OrderPage;
