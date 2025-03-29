import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MenuContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const AddButton = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const Menu = ({ menuItems, addToCart }) => {
  const navigate = useNavigate();

  return (
    <MenuContainer>
      <h2>Menu</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <span>{item.name} - ${item.price}</span>
          <AddButton onClick={() => addToCart(item)}>Add to Cart</AddButton>
        </MenuItem>
      ))}
      <button onClick={() => navigate('/cart')}>Go to Cart</button>
    </MenuContainer>
  );
};

export default Menu;
