import React, {Component} from 'react';
import CounterView from './component/CounterView';
import Counter from './model/Counter';
import CounterList from './model/CounterList';
import {observer} from 'mobx-react';

const counterList = new CounterList();

@observer
class CounterApp extends Component {
  render() {
    return (
      <div>
        <button onClick={counterList.addCounter}>Add Counter</button>
        {
          counterList.counters.map((counter, index) => {
            return (
              <div key={index}>
                <CounterView model={counter} />
                <button onClick={counterList.removeCounter.bind(counterList, index)}>X</button>
              </div>
            )
          }) 
        }
      </div>
    );
  }
}

export default CounterApp;