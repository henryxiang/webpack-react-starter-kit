import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <br/>
        Timestamp: {new Date().toISOString()}
      </div>
    );
  }
}
