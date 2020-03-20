import React from 'react';
import { connect } from 'react-redux';

import toggleCartHidden from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingCart.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="CartIcon" onClick={toggleCartHidden}>
    <ShoppingCartIcon className="CartIcon__shoppingCart" />
    <span className="CartIcon__count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
