import ratingReviewsActionTypes from "./ratingReviews.action";
const initialState = {
  ratings: 5,
  reviews: [
    { name: "Helen", rating: 5, comment: "Amazing" },
    { name: "David", rating: 4, comment: "Not bad" },
  ],
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ratingReviewsActionTypes.GET_RATINGS:
      return {
        ...state,
        ratings: action.payload,
      };
    case ratingReviewsActionTypes.GET_REVIEWS:
      return {
        ...state,
        ratings: action.payload,
      };
    default:
      return state;
  }
};

export default ratingReducer;
