import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="CartDropdown">
    {cartItems.length > 0 ? (
      <Fragment>
        <div className="CartDropdown__items">
          <ul className="CartDropdown__itemsList">
            {cartItems.map((item) => (
              <CartItem key={`${item.id}-${item.value}`} {...item} />
            ))}
          </ul>
        </div>
        <CustomButton
          className="CartDropdown__button"
          onClick={() => {
            dispatch(toggleCartHidden());
            history.push("/checkout");
          }}
        >
          CHECKOUT
        </CustomButton>
      </Fragment>
    ) : (
      <span className="CartDropdown__empty">Your cart is empty! </span>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
