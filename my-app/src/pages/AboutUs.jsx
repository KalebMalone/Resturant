import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff; /* Explicitly set background to white */
  min-height: 100vh;
  text-align: center;
  margin: 0;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

function AboutUs() {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        We are a team of passionate food enthusiasts committed to bringing you the best dining experience. Our menu features a variety of mouthwatering dishes made with the freshest ingredients, crafted with love and care. Whether you're here for a quick bite or a leisurely meal, we're sure you'll find something you love. Thank you for choosing us!
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutUs;
