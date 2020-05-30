import overviewActionTypes from "./overview.action";

const initialState = {
  overview: null,
  isFetching: false,
  err: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case overviewActionTypes.FETCH_OVERVIEW_START:
      return Object.assign({}, state, { isFetching: true });
    case overviewActionTypes.FETCH_OVERVIEW_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        overview: action.payload,
      });
    case overviewActionTypes.FETCH_OVERVIEW_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        err: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
