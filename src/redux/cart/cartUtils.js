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
