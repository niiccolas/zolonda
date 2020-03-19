import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInSignUp.scss';

const SignInSignUp = () => {
  return (
    <div className="SignInSignUp">
      <SignIn className="SignInSignUp__section" />
      <SignUp className="SignInSignUp__section" />
    </div>
  );
};

export default SignInSignUp;
