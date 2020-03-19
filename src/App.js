import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // closes subscription
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
