import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "./cartActionTypes";
import {
  addItemToCart,
  incrementItem,
  decrementItem,
  removeItem,
} from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [
    {
      name: "Blue Beanie",
      value: 18,
      currency: "$",
      id: 2,
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      quantity: 1,
    },
    {
      name: "Brown Cowboy",
      value: 35,
      currency: "$",
      id: 3,
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      quantity: 1,
    },
    {
      name: "Grey Brim",
      value: 25,
      currency: "$",
      id: 4,
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      quantity: 1,
    },
  ],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state, payload) };
    case INCREMENT_ITEM:
      return { ...state, cartItems: incrementItem(state, payload) };
    case DECREMENT_ITEM:
      return { ...state, cartItems: decrementItem(state, payload) };
    case CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: removeItem(state, payload) };
    default:
      return state;
  }
};

export default cartReducer;
