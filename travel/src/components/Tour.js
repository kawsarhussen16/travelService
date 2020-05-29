import React, { Component } from "react";
import styled from "styled-components";
import bg from "../asset/canyon-min.png";

//const image = { bg: "black" };
class Tour extends Component {
  render() {
    return (
      <TourContainer bg={bg}>
        <Content>
          <Title>Breathtaking Antelope Canyon Tour</Title>
          <Ratings>
            <Star>5.0</Star>
            <ReviewNumber>475 reviews</ReviewNumber>
          </Ratings>
        </Content>
      </TourContainer>
    );
  }
}

export default Tour;

const TourContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 70vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  overflow: hidden;
  color: white;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: auto 10px;
`;

const Ratings = styled.div`
  width: 39%;
  margin: 3px 10px;
`;
const Star = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding: 5px;
  margin: 3px;
`;
const ReviewNumber = styled.div``;
