import { CartActionTypes } from './cart.actionTypes';

const INITIAL_STATE = {
  isCartHidden: true,
};

const cartReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, isCartHidden: !state.isCartHidden };
    default:
      return state;
  }
};

export default cartReducer;
