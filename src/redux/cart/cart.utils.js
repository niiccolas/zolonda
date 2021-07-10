export const addItemToCart = (cart, itemToAdd) => {
  const hasItemInCartAlready = cart.find(
    cartItem => cartItem.id === itemToAdd.id,
  );

  if (hasItemInCartAlready)
    return cart.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );

  return [...cart, { ...itemToAdd, quantity: 1 }];
};
