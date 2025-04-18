import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

// Styling for the Header (Navbar container)
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 25px 20px;
  box-shadow: 0 4px 6px rgb(71, 63, 63);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

// Title of the Navbar, clickable to navigate to Home
const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: rgb(71, 63, 63);
  margin: 0;
  cursor: pointer;
  &:hover {
    color: rgb(71, 63, 63);
  }
`;

// Navigation container for the links (align links closer to the center)
const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-start; /* Align to the left first */
  flex-grow: 1;
  flex-wrap: wrap;
  margin-left: 580px; /* Added margin to nudge right */
`;

// Styling for individual navigation links
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: rgb(71, 63, 63);
  font-weight: bold;
  font-size: 18px;
  padding: 5px 15px;
  display: inline-block;
  &:hover {
    color: rgb(71, 63, 63);
  }
`;

// Styled Cart Button
const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: rgb(71, 63, 63);
  cursor: pointer;
  position: relative;
  margin-right: 15px;
  
  &:hover {
    color: rgb(50, 50, 50);
  }
`;

// Cart Item Count Badge
const CartBadge = styled.span`
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 7px;
  position: absolute;
  top: -5px;
  right: -10px;
`;

// Styling for the Order Now button
const OrderButton = styled.button`
  background: rgb(71, 63, 63);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  &:hover {
    background: rgb(50, 50, 50);
  }
`;

// Styling for Contact Information section
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: rgb(71, 63, 63);
  max-width: 250px;
  width: 100%;
`;

// Contact Item styling
const ContactItem = styled.a`
  color: rgb(71, 63, 63);
  text-decoration: none;
  &:hover {
    color: rgb(50, 50, 50);
  }
`;

const mediaQuery = `@media (max-width: 768px)`;

const NavBar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // Example state, replace with real data

  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Savory Seasons</Title>
      </Link>

      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/menu">Menu</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
      </Navigation>

      {/* Cart Button */}
      <CartButton onClick={() => navigate("/cart")}>
        🛒
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </CartButton>

      {/* Order Now Button */}
      <OrderButton onClick={() => navigate("/order")}>Order Now</OrderButton>

      {/* Contact Information */}
      <ContactInfo>
        <ContactItem href="tel:+1234567890">Phone: (123) 456-7890</ContactItem>
        <ContactItem href="mailto:info@savoryseasons.com">Email: Savory Seasons</ContactItem>
        <ContactItem>Address: 123 Savory St, Food City </ContactItem>
      </ContactInfo>

      {/* Media Query to Adjust Layout for Smaller Screens */}
      <style>
        {`
          ${mediaQuery} {
            ${ContactInfo} {
              align-items: center;
              text-align: center;
              max-width: 100%;
            }
          }
        `}
      </style>
    </Header>
  );
}

export default NavBar;
