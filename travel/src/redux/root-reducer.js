import { combineReducers } from "redux";
import ratingReducer from "./rating-reviews/rating_reviews_reducer";
import overviewReducer from "./overview/overview_reducer";

const rootReducer = combineReducers({
  rating: ratingReducer,
  overview: overviewReducer,
});

export default rootReducer;
