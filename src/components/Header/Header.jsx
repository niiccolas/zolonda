import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/appLogo.svg";

import "./Header.scss";

const Header = ({ currentUser }) => {
  console.log(currentUser);

  return (
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
