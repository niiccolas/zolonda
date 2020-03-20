import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/appLogo.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
  <div className="Header">
    <Link to="/" className="Header__logoContainer">
      <Logo className="Header__logo" />
    </Link>
    <div className="Header__options">
      {currentUser && (
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

const mapStateToProps = state => ({
  // state > the Redux store
  // user > the User reducer
  // currentUser > key from User reducer's initialState/state
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
