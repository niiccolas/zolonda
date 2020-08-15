import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import "./CartIcon.scss";

const CartIcon = ({ itemsCount, toggleCartHidden }) => (
  <div className="CartIcon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="CartIcon__logo" />
    <span className="CartIcon__count">{itemsCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
