import React, { Component } from 'react';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import Home from './component/Home';
import Test from './component/Test';

class App extends Component {
  render() {
    return ( 
      <Test />
    );
  }
}

export default App;