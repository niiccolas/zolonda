import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="CartDropdown">
    <div className="CartDropdown__items">
      <ul className="CartDropdown__itemsList">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </ul>
    </div>
    <CustomButton className="CartDropdown__button CustomButton">
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
