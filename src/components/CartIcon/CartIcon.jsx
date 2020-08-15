import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./CartIcon.scss";

const CartIcon = ({ cart, toggleCartHidden }) => {
  const totalCartQuantity = () =>
    cart.cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

  return (
    <div className="CartIcon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="CartIcon__logo" />
      <span className="CartIcon__count">{totalCartQuantity()}</span>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
