import React, { Component } from 'react';
import Test from './component/Test';

class App extends Component {
  render() {
    return ( 
      <div>
        <h1> Webpack + React Starter Kit</h1>
        <Test />
        {new Date().toISOString()}
      </div>
    );
  }
}

export default App;
