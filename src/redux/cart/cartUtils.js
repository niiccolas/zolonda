export const addItemToCart = ({ cartItems }, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === itemToAdd.id && cartItem.name === itemToAdd.name
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id && cartItem.name === itemToAdd.name
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const incrementItem = ({ cartItems }, itemIncrement) =>
  cartItems.map((cartItem) =>
    cartItem.id === itemIncrement.id && cartItem.name === itemIncrement.name
      ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      : cartItem
  );

export const decrementItem = ({ cartItems }, itemIncrement) =>
  cartItems.map((cartItem) =>
    cartItem.id === itemIncrement.id && cartItem.name === itemIncrement.name
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );

export const removeItem = ({ cartItems }, itemToRemove) =>
  cartItems.filter((item) => item.name !== itemToRemove.name);
