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

// Global Styles for the page
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  margin: 0;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 1200px;
`;

// Heading for the Menu page
const MenuHeading = styled.h1`
  font-size: 36px;
  color:rgb(71, 63, 63);
  text-align: center;
  margin-bottom: 40px;
  background-color: white; 
  padding: 15px;
  width: 100%;
  border-radius: 8px;
`;

// Menu Item style (each item will be placed in a grid)
const MenuItemsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 0 auto; /* This will center the grid */
  max-width: 1200px; /* Ensure it doesn't get too wide */
  flex-wrap: wrap;
`;

// Menu Item Card style (Make all cards the same size)
const MenuItem = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  width: 45%; /* Each card takes up 45% of the width */
  min-height: 200px; /* Set a minimum height to ensure all cards are the same size */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center; /* Center the text horizontally */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute the content evenly */
  align-items: center; /* Horizontally center content */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 22px;
    color:rgb(71, 63, 63);
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

// Category Heading
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

const Menu = () => {
    const [menuData, setMenuData] = useState({
        starters: [],
        mains: [],
        desserts: [],
        drinks: [],
    });

    // Fetch data for all categories at once
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

    // Function to render menu items dynamically
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
            <MenuContainer>
                <MenuHeading>Our Menu</MenuHeading>

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
            </MenuContainer>
        </>
    );
};

export default Menu;
