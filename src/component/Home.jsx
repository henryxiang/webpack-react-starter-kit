import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Component</h2>
        <br/>
        Timestamp: {new Date().toISOString()}
      </div>
    );
  }
}
