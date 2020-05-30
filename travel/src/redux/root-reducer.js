import { combineReducers } from "redux";
import ratingReviewReducer from "./rating-reviews/rating_reviews_reducer";
import overviewReducer from "./overview/overview_reducer";

const rootReducer = combineReducers({
  ratingReviews: ratingReviewReducer,
  overview: overviewReducer,
});

export default rootReducer;
