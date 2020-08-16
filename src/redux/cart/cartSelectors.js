import { createSelector } from "reselect";

/**
 * INPUT selector
 * @param {Object} state
 */
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // an array of INPUT selectors
  (cart) => cart.cartItems // a function that will return the value we want out of selector
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prev, curr) => {
      return prev + curr.value * curr.quantity;
    }, 0)
);
