import React from "react";

import "./CartItem.scss";

const CartItem = ({ name, value, currency, quantity, imageUrl }) => (
  <li className="CartItem">
    <img src={imageUrl} alt={name} />
    <div className="CartItem__details">
      <span className="CartItem__name">{name}</span>
      {quantity} x {currency}
      {value}
    </div>
  </li>
);

export default CartItem;
