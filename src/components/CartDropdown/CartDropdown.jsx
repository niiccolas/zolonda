import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="CartDropdown">
    <div className="CartDropdown__items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
