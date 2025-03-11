import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 20px;
  margin: 0;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 20px;
  color: #777;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #d32f2f;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #b71c1c;
  }
`;

function Home() {
    const navigate = useNavigate(); // Initialize the navigation hook

    const goToMenu = () => {
        navigate("/menu"); // Navigate to the menu page when button is clicked
    };

    return (
        <Container>
            <Heading>Welcome to!</Heading>
            <SubHeading>You are gay</SubHeading>
            <Button onClick={goToMenu}>Explore Daddys Menu</Button>
        </Container>
    );
}

export default Home;
