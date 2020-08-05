import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [reduxLogger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
