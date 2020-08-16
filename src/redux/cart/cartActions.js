import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "./cartActionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const incrementItem = (item) => ({
  type: INCREMENT_ITEM,
  payload: item,
});

export const decrementItem = (item) => ({
  type: DECREMENT_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
