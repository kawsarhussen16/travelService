import { firestore } from "../../firebase/firebase";
const overviewActionTypes = {
  FETCH_OVERVIEW_START: "FETCH_OVERVIEW_START",
  FETCH_OVERVIEW_SUCCESS: "FETCH_OVERVIEW_SUCCESS",
  FETCH_OVERVIEW_FAILURE: "FETCH_OVERVIEW_FAILURE",
};

export const fetchOverviewStart = () => ({
  type: overviewActionTypes.FETCH_OVERVIEW_START,
});
export const fetchOverviewSuccess = (overview) => {
  return {
    type: overviewActionTypes.FETCH_OVERVIEW_SUCCESS,
    payload: overview,
  };
};
export const fetchOverviewFailure = (err) => ({
  type: overviewActionTypes.FETCH_OVERVIEW_FAILURE,
  payload: err,
});

export const fetchOverviewAsync = () => (dispatch) => {
  dispatch(fetchOverviewStart());
  const collectionRef = firestore.collection("canyone");
  dispatch(fetchOverviewStart());
  collectionRef
    .get()
    .then((data) => {
      const overview = data.docs.map((d) => d.data());
      dispatch(fetchOverviewSuccess(overview[0]));
    })
    .catch((err) => dispatch(fetchOverviewFailure(err)));
};

export default overviewActionTypes;
