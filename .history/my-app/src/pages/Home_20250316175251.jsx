import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
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
    background-color:rgb(71, 63, 63);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

function Home() {
    const navigate = useNavigate(); // Initialize the navigation hook

    const goToMenu = () => {
        navigate("/menu"); // Navigate to the menu page when button is clicked
    };

    return (
        <Container>
            <img alt="Restaurant" src="/images/restaurant.jpg" />
            <Heading>Welcome to Savory Seasons!</Heading>
            <SubHeading>Your next great meal is just a click away.</SubHeading>
            <Button onClick={goToMenu}>Explore Our Menu</Button>
        </Container>
    );
}

export default Home;
