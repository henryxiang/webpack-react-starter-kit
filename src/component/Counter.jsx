import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class Counter extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div>
        <div>{counter.count}</div>
        <button onClick={this.handleIncrement.bind(this)}>+</button>  
        <button onClick={this.handleDecrement.bind(this)}>-</button>  
        <button onClick={this.handleReset.bind(this)}>0</button>  
      </div>
    );
  }

  handleIncrement() {
    const {counter} = this.props;
    counter.increment();
  }

  handleDecrement() {
    const {counter} = this.props;
    counter.decrement();
  }

  handleReset() {
    const {counter} = this.props;
    counter.reset();
  }
}

export default Counter
