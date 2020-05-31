import React, { Component } from "react";
import styled from "styled-components";
import bg from "../asset/canyon-min.png";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import { connect } from "react-redux";
//const image = { bg: "black" };
class Tour extends Component {
  render() {
    return (
      <TourContainer bg={bg}>
        <Content>
          <Title>Breathtaking Antelope Canyon Tour</Title>
          <Ratings>
            <Star>
              {" "}
              <StarSharpIcon color="secondary" />
              <p>{this.props.avgRating}</p>
            </Star>
            <ReviewNumber>{this.props.totalReviews} reviews</ReviewNumber>
          </Ratings>
        </Content>
      </TourContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  avgRating: state.ratingReviews.avgRating,
  totalReviews: state.ratingReviews.totalReviews,
});

export default connect(mapStateToProps)(Tour);

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
  margin: 0px 0px 90px 0px;
`;
const Title = styled.div`
  flex: 3;
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-left: 20px;
`;

const Ratings = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 10%;
`;
const Star = styled.div`
  justify-content: flex-end;
  display: flex;
  font-size: 17px;
  font-weight: bold;
  padding: 5px;
  margin: 3px;
  p {
    margin: 3px 0 0 5px;
    font-size: 23px;
  }
`;
const ReviewNumber = styled.div`
  font-size: 16px;
`;
