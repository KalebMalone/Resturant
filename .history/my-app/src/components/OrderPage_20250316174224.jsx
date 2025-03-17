import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const MenuHeading = styled.h1`
  font-size: 36px;
  color: #d32f2f;
  text-align: center;
  margin-bottom: 40px;
  background-color: white;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
`;

const CategoryHeading = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-top: 30px;
  background-color: #fff;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItemsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const MenuItemCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  width: 45%;
  min-height: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 22px;
    color: #d32f2f;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  strong {
    font-size: 18px;
    color: #d32f2f;
  }
`;

const AddToCartButton = styled.button`
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const OrderPage = () => {
    const [menuData, setMenuData] = useState({
        starters: [],
        mains: [],
        desserts: [],
        drinks: [],
    });
    const [cart, setCart] = useState([]);

    // Fetch menu data
    useEffect(() => {
        Promise.all([
            fetch('http://localhost:5000/starters').then((response) => response.json()),
            fetch('http://localhost:5000/mains').then((response) => response.json()),
            fetch('http://localhost:5000/desserts').then((response) => response.json()),
            fetch('http://localhost:5000/drinks').then((response) => response.json())
        ])
            .then(([starters, mains, desserts, drinks]) => {
                console.log('Fetched menu data:', { starters, mains, desserts, drinks });
                setMenuData({ starters, mains, desserts, drinks });
            })
            .catch((error) => {
                console.error('Error loading menu data:', error);
            });
    }, []);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.name} added to cart`);
    };

    const renderMenuItems = (category) => {
      if (!category || category.length === 0) return <p>No items available</p>;
  
      return category.map((item, index) => {
          // Check if the item has an image and log its path
          console.log(item.image); // Check the image path in the console
  
          return (
              <MenuItem key={index}>
                  {/* Check if image exists and render it */}
                  {item.image ? (
                      <img src={item.image} alt={item.name} style={{ width: '50%', height: 'auto', borderRadius: '8px' }} />
                  ) : (
                      <p>No image available</p>
                  )}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>${item.price}</strong></p>
              </MenuItem>
          );
      });
  };
    return (
        <>
            <GlobalStyle />
            <OrderContainer>
                <MenuHeading>Order Now</MenuHeading>

                {/* Display Starters */}
                <CategoryHeading>Starters</CategoryHeading>
                <MenuItemsGrid>
                    {menuData.starters.length > 0 ? renderMenuItems(menuData.starters) : <p>Loading Starters...</p>}
                </MenuItemsGrid>

                {/* Display Main Courses */}
                <CategoryHeading>Main Courses</CategoryHeading>
                <MenuItemsGrid>
                    {menuData.mains.length > 0 ? renderMenuItems(menuData.mains) : <p>Loading Mains...</p>}
                </MenuItemsGrid>

                {/* Display Desserts */}
                <CategoryHeading>Desserts</CategoryHeading>
                <MenuItemsGrid>
                    {menuData.desserts.length > 0 ? renderMenuItems(menuData.desserts) : <p>Loading Desserts...</p>}
                </MenuItemsGrid>

                {/* Display Drinks */}
                <CategoryHeading>Drinks</CategoryHeading>
                <MenuItemsGrid>
                    {menuData.drinks.length > 0 ? renderMenuItems(menuData.drinks) : <p>Loading Drinks...</p>}
                </MenuItemsGrid>
            </OrderContainer>
        </>
    );
};

export default OrderPage;
