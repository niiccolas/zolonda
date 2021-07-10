import { CartActionTypes } from './cart.actionTypes';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  isCartHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartHidden: !state.isCartHidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
