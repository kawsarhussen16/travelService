import ratingReviewsActionTypes from "./ratingReviews.action";
import { getAverageRating } from "./rating_reviews.utils";
const initialState = {
  avgRating: 0,
  totalReviews: 0,
  reviews: [],
  isFetching: false,
  err: undefined,
};

const ratingReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ratingReviewsActionTypes.FETCH_REVIEWS_START:
      return Object.assign({}, state, { isFetching: true });

    case ratingReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
      let avg = getAverageRating(action.payload);
      return Object.assign({}, state, {
        isFetching: false,
        reviews: action.payload,
        avgRating: avg.avgRating,
        totalReviews: avg.totalReviews,
      });

    case ratingReviewsActionTypes.FETCH_REVIEWS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        err: action.payload,
      });
    default:
      return state;
  }
};

export default ratingReviewsReducer;
