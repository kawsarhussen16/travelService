import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const Reducer = () => {
  return {
    name: "Hello",
  };
};
export const store = createStore(Reducer, applyMiddleware(...middlewares));
