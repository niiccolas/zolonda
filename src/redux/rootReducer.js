// the base reducer object
// representing the state of our application
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
