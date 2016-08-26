import 'todomvc-app-css/index.css';

import React, { Component } from 'react';
import {observer} from 'mobx-react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import ObservableList from '../model/ObservableList';

const todos = new ObservableList();

@observer
class TodoApp extends Component {
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

export default TodoApp