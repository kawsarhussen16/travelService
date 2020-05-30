import overviewActionTypes from "./overview.action";
import { getOverview } from "./overview.utils";
const initialState = {
  overview: null,
};

const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case overviewActionTypes.GET_OVERVIEW:
      return {
        ...state,
        overview: getOverview(),
      };
    default:
      return state;
  }
};

export default overviewReducer;
