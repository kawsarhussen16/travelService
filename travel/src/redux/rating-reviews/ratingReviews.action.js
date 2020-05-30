import { firestore } from "../../firebase/firebase";
const ratingReviewsActionTypes = {
  FETCH_REVIEWS_START: "FETCH_REVIEWS_START",
  FETCH_REVIEWS_SUCCESS: "FETCH_REVIEWS_SUCCESS",
  FETCH_REVIEWS_FAILURE: "FETCH_REVIEWS_FAILURE",
};

export const getReviews = () => ({
  type: ratingReviewsActionTypes.GET_REVIEWS,
});

export const fetchReviewsStart = () => ({
  type: ratingReviewsActionTypes.FETCH_REVIEWS_START,
});
export const fetchReviewsSuccess = (reviews) => ({
  type: ratingReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});
export const fetchReviewsFailure = (err) => ({
  type: ratingReviewsActionTypes.FETCH_REVIEWS_FAILURE,
  payload: err,
});

export const fetchReviewsAsync = () => (dispatch) => {
  dispatch(fetchReviewsStart());
  const collectionRef = firestore.collection("ratingAndReviews");
  collectionRef
    .get()
    .then((data) => {
      const reviews = data.docs.map((d) => d.data());
      dispatch(fetchReviewsSuccess(reviews));
    })
    .catch((err) => dispatch(fetchReviewsFailure(err)));
};
export default ratingReviewsActionTypes;
