import React from "react";
import styled from "styled-components";
import Modal from "./utils/Modal";
const Footer = () => {
  return (
    <FooterContainer>
      <Modal />
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  bottom: -4px;
  left: 0;
`;
