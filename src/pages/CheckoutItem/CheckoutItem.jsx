import React from "react";
import { connect } from "react-redux";

import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../redux/cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({
  id,
  name,
  value,
  currency,
  imageUrl,
  quantity,
  incrementItem,
  decrementItem,
  removeItem,
}) => (
  <div className="CheckoutItem" key={`${id}-${value}`}>
    <div className="CheckoutItem__image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="name">
      <span>{name}</span>
    </div>
    <div className="quantity">
      <button
        onClick={() => incrementItem({ id, name })}
        className="CheckoutItem__button CheckoutItem__button_add"
      >
        +
      </button>{" "}
      {quantity}{" "}
      <button
        onClick={() => quantity > 1 && decrementItem({ id, name })}
        className={`CheckoutItem__button CheckoutItem__button_add ${
          quantity === 1 ? "disabled" : "active"
        }`}
      >
        –
      </button>
    </div>
    <div className="price">
      <span>
        {currency}
        {value}
      </span>
    </div>
    <div className="remove-button">
      <button
        className="CheckoutItem__button CheckoutItem__button_remove"
        onClick={() => removeItem({ id, name })}
      >
        ✕
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  incrementItem: (item) => dispatch(incrementItem(item)),
  decrementItem: (item) => dispatch(decrementItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
