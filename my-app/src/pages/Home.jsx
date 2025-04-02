import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; /* Adjust height for a better layout */
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
  background-color: rgb(71, 63, 63);
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(90, 80, 80);
  }
`;

const Image = styled.img`
  width: 60%; /* Makes it large but not too big */
  max-width: 7000px; /* Prevents it from getting too large on bigger screens */
  height: auto; /* Keeps aspect ratio */
  border-radius: 12px; /* Gives a modern rounded look */
  margin-top: 200px; /* Space between the image and heading */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
`;

function Home() {
    const navigate = useNavigate();

    const goToMenu = () => {
        navigate("/menu");
    };

    return (
        <Container>
            <Image alt="Restaurant" src="/images/back.jpg" />
            <Heading>Welcome to Savory Seasons!</Heading>
            <SubHeading>Your next great meal is just a click away.</SubHeading>
            <Button onClick={goToMenu}>Explore Our Menu</Button>
        </Container>
    );
}

export default Home;
