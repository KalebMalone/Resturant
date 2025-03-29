import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styling for the Header (Navbar container)
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 15px 20px;
  box-shadow: 0 4px 6pxrgb(22, 22, 22);
  z-index: 1000;
`;

// Title of the Navbar, clickable to navigate to Home
const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #d32f2f;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: #b71c1c;
  }
`;

// Navigation container for the links
const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
`;

// Styling for individual navigation links
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #d32f2f;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: #b71c1c;
  }
`;

// Styling for the Order Now button
const OrderButton = styled.button`
  background: #d32f2f;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    background: #b71c1c;
  }
`;

function NavBar() {
    const navigate = useNavigate();  // Hook to programmatically navigate

    const handleOrderNow = () => {
        navigate("/order");  // Navigates to the OrderPage
    };

    return (
        <Header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Title>Savory Seasons</Title>
            </Link>
            <Navigation>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/menu">Menu</StyledNavLink>
                <StyledNavLink to="/about">About Us</StyledNavLink>
            </Navigation>

            {/* Order Now Button */}
            <OrderButton onClick={handleOrderNow}>Order Now</OrderButton>
        </Header>
    );
}

export default NavBar;
