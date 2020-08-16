import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelectors";

import { ReactComponent as Logo } from "../../assets/appLogo.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import "./Header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="Header">
    <Link to="/" className="Header__logoContainer">
      <Logo className="Header__logo" />
    </Link>
    <div className="Header__options">
      {currentUser?.displayName && (
        <div className="Header__option user">
          signed in: {currentUser.displayName}
        </div>
      )}
      <Link to="/shop" className="Header__option">
        SHOP
      </Link>
      <Link to="/contact" className="Header__option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="Header__option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="Header__option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
