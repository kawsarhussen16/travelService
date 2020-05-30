import React from "react";
import styled from "styled-components";
import RatingStar from "./utils/Star";
const Reviews = ({ reviews }) => {
  return (
    <ReviewContainer>
      {reviews
        ? reviews.map((item) => {
            const { headline, username, date, comment, rating } = item;
            let convertedDate = new Date(
              date["seconds"] * 1000
            ).toLocaleDateString();
            return (
              <div key={username}>
                <div className="review-detail">
                  <p>
                    {" "}
                    <strong>{headline} </strong>
                  </p>
                  <div className="rating-star">
                    {" "}
                    <RatingStar value={rating} />
                  </div>
                  <p className="user-tag">
                    by {username} on {convertedDate}
                  </p>
                  <p>{comment}</p>
                </div>
              </div>
            );
          })
        : "Loading"}
    </ReviewContainer>
  );
};

export default Reviews;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  min-height: 20vh;
  margin-bottom: 80px;
  .review-detail {
    border: 1px solid pink;
    padding: 10px;
    margin: 10px 0;
    .rating-star {
      margin-top: 5px;
    }
    .user-tag {
      font-size: 13px;
      margin: 5px 0;
    }
  }
`;
