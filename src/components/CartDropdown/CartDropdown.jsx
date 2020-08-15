import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = (cartItems) => {
  return (
    <div className="CartDropdown">
      <div className="CartDropdown__items">
        <ul>
          {cartItems.length > 0 &&
            cartItems.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
      <CustomButton className="CartDropdown__button CustomButton">
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
