import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value: inputValue, name: inputName } = event.target;
    this.setState({ [inputName]: inputValue });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} className="SignIn__inputs">
          <FormInput
            type="email"
            name="email"
            value={email}
            label="E-mail"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />

          <div className="CustomButtons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
