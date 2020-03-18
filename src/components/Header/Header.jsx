import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/appLogo.svg';

import './Header.scss';

const Header = () => (
  <div className="Header">
    <Link to="/" className="Header__logoContainer">
      <Logo className="Header__logo" />
    </Link>
    <div className="Header__options">
      <Link to="/shop" className="Header__option">
        SHOP
      </Link>
      <Link to="/contact" className="Header__option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
