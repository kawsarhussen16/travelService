import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Button>Book Now</Button>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Button = styled.button`
  width: 100%;
  background: red;
  color: white;
  height: 50px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
`;
