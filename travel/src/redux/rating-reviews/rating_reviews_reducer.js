import ratingReviewsActionTypes from "./ratingReviews.action";
import { getReviews, getAverageRating } from "./rating_reviews.utils";
const initialState = {
  avgRating: 0,
  totalReviews: 0,
  reviews: [],
};

const ratingReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ratingReviewsActionTypes.GET_REVIEWS:
      let reviews = getReviews();
      let ratings = getAverageRating(reviews);
      state = { ...state, ...ratings };
      return {
        ...state,
        reviews: reviews,
      };
    default:
      return state;
  }
};

export default ratingReviewsReducer;
