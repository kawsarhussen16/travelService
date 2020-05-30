import React, { Component } from "react";
import styled, { css } from "styled-components";
import Overview from "./Overview";
import Reviews from "./Reviews";
import { fetchOverviewAsync } from "../redux/overview/overview.action";
import { fetchReviewsAsync } from "../redux/rating-reviews/ratingReviews.action";
import { connect } from "react-redux";

class ReviewOverview extends Component {
  state = { overview: true, review: false };

  componentDidMount() {
    const { fetchOverviewAsync, fetchReviewsAsync } = this.props;
    fetchReviewsAsync();
    fetchOverviewAsync();
  }

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
        <Switch className="btn_switcher_container">
          <Button
            clicked={this.state.overview}
            onClick={this.handleRenderOverview}
          >
            <p>Overview</p>
            <span className="dot"></span>
          </Button>
          <Button clicked={this.state.review} onClick={this.handleRenderReview}>
            <p>Reviews</p>
            <span className="dot"></span>
          </Button>
        </Switch>

        <div>
          {this.state.overview ? (
            <Overview overview={this.props.overview} />
          ) : (
            <Reviews reviews={this.props.reviews} />
          )}
        </div>
      </ReviewOverviewContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.ratingReviews.reviews,
  overview: state.overview.overview,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviewsAsync: () => dispatch(fetchReviewsAsync()),
  fetchOverviewAsync: () => dispatch(fetchOverviewAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewOverview);

const ReviewOverviewContainer = styled.div`
  min-height: calc(40vh);
  width: 100%;
  position: absolute;
  z-index: 90;
  margin-top: -60px;
  background: whitesmoke;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Switch = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  margin: auto;
  min-height: 30px;
  z-index: 90;
  padding-top: 30px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
  color: grey;
  ${(props) =>
    props.clicked &&
    css`
      color: red;
      .dot {
        margin-top: 5px;
        height: 7px;
        width: 7px;
        background-color: red;
        border-radius: 50%;
      }
    `}
  &:hover {
    cursor: pointer;
  }
`;
