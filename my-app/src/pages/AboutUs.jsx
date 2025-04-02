import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers content vertically */
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  text-align: center;
  margin: 0;
  background-image: url('/images/back.jpg'); /* Add your image path here */
  background-size: cover;
  background-position: center;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 20px; /* Adds padding around the text */
`;

function AboutUs() {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        We are a team of passionate food enthusiasts committed to bringing you the best dining experience. Our menu features a variety of mouthwatering dishes made with the freshest ingredients, crafted with love and care. From timeless classics to innovative new creations, each dish is designed to satisfy your cravings and bring a smile to your face. Whether you're here for a quick bite or a leisurely meal, we're sure you'll find something you love. Our commitment to quality and service means you'll always be treated like family. Thank you for choosing us, and we look forward to serving you!
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutUs;
