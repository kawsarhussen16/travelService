import React, { Component } from "react";
import styled from "styled-components";

class ReviewOverview extends Component {
  state = { overview: true, review: false };
  handleRenderOverview = () => {
    if (!this.state.overview) {
      this.setState({ overview: true, review: false });
    }
  };
  handleRenderReview = () => {
    if (!this.state.review) {
      this.setState({ overview: false, review: true });
    }
  };
  render() {
    return (
      <ReviewOverviewContainer>
        <div className="btn_switcher_container">
          <button onClick={this.handleRenderOverview}>Overview</button>
          <button onClick={this.handleRenderReview}>Reviews</button>
        </div>
        <div>{this.state.overview ? "Overview" : "Reviews"}</div>
      </ReviewOverviewContainer>
    );
  }
}

export default ReviewOverview;

const ReviewOverviewContainer = styled.div`
  min-height: calc(40vh);
  width: 100%;
  position: absolute;
  z-index: 90;
  margin-top: -60px;
  background: whitesmoke;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  .btn_switcher_container {
    padding-top: 100px;
    min-height: 30px;
    z-index: 90;
  }
`;
