import React from "react";

import CustomButton from "../CustomButton/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => (
  <div className="CartDropdown">
    <div className="CartDropdown__items"></div>
    <CustomButton className="CartDropdown__button CustomButton">
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;
