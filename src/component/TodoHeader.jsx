import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return (
      <div className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autofocus />
      </div>    
    );
  }
}

export default  TodoHeader