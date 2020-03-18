import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/zolonda" component={Home} />
      <Route path="/zolonda/shop" component={Shop} />
    </Switch>
  </div>
);

export default App;
