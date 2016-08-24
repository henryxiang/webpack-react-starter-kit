import React, {Component} from 'react';
import CounterView from './component/CounterView';
import Counter from './model/Counter';
import ObservableList from './model/ObservableList';
import {observer} from 'mobx-react';

const counterList = new ObservableList();

@observer
class CounterApp extends Component {
  render() {
    return (
      <div>
        <button onClick={counterList.addItem.bind(counterList, new Counter())}>Add Counter</button>
        {
          counterList.items.map((counter, index) => {
            return (
              <div key={index}>
                <CounterView model={counter} />
                <button onClick={counterList.removeItem.bind(counterList, index)}>X</button>
              </div>
            )
          }) 
        }
        <div>Counters: {counterList.size}</div>
        <div>Total: {counterList.items.reduce((pre, cur) => pre+cur.count, 0)}</div>
      </div>
    );
  }
}

export default CounterApp;