import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgb(71, 63, 63);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: rgb(71, 63, 63);
  margin: 0;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: rgb(71, 63, 63);
  font-weight: bold;
  font-size: 18px;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: rgb(71, 63, 63);
  cursor: pointer;
  position: relative;
  margin-right: 15px;
`;

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

function NavBar({ cart }) {
  const navigate = useNavigate();

  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Savory Seasons</Title>
      </Link>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/menu">Menu</StyledNavLink>
      </Navigation>
      <CartButton onClick={() => navigate("/cart")}>🛒
        {cart.length > 0 && <CartBadge>{cart.length}</CartBadge>}
      </CartButton>
    </Header>
  );
}

export default NavBar;
