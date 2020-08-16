import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

import "./Checkout.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="Checkout">
    <div className="Checkout__header">
      <div className="Checkout__headerBlock">
        <span>Product</span>
      </div>
      <div className="Checkout__headerBlock">
        <span>Description</span>
      </div>
      <div className="Checkout__headerBlock">
        <span>Quantity</span>
      </div>
      <div className="Checkout__headerBlock">
        <span>Price</span>
      </div>
      <div className="Checkout__headerBlock">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem {...item} />
    ))}
    <div className="Checkout__total">${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
