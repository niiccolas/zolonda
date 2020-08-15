import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cartActionTypes";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state, payload) };
    default:
      return state;
  }
};

export default cartReducer;
