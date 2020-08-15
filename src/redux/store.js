import { createStore, applyMiddleware } from "redux";
// import reduxLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

// const middlewares = [reduxLogger];

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
