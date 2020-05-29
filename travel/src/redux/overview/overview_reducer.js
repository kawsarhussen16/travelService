import overviewActionTypes from "./overview.action";

const initialState = {
  overview: null,
};

const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case overviewActionTypes.GET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case overviewActionTypes.GET_DURATION:
      return {
        ...state,
        price: action.payload,
      };
    case overviewActionTypes.GET_DESCRIPTIONS:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default overviewReducer;
