import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
const middleware = applyMiddleware(thunk, logger);
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
