import 'todomvc-app-css/index.css';

import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

export default class TodoApp extends Component {
  render() {
    return (
      <div className="todoapp">
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
