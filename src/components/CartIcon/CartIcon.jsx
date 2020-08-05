import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="CartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="CartIcon__logo" />
    <span className="CartIcon__count">3</span>
  </div>
);

const mapStateToProps = (state) => ({
  hidden: state.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
