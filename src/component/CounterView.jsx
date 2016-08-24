import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class CounterView extends Component {
  render() {
    const {model} = this.props;
    return (
      <span>
        <button onClick={model.increment}>+</button>
        {model.count}
        <button onClick={model.decrement}>-</button>
      </span>
    );
  }
}

export default CounterView
