const ratingReviewsActionTypes = {
  GET_RATINGS: "GET_RATINGS",
  GET_REVIEWS: "GET_REVIEWS",
};

export const getReviews = () => ({
  type: ratingReviewsActionTypes.GET_REVIEWS,
});
export default ratingReviewsActionTypes;
