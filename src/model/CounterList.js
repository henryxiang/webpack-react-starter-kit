import {observable, computed, action} from 'mobx';
import Counter from './Counter';

export default class CounterList {
  @observable counters = [];

  @action addCounter = () => {
    let id = this.counters.length + 1;
    let counter = new Counter(id);
    this.counters.push(counter);
  }

  @action removeCounter = (index) => {
    this.counters.splice(index, 1);
  }

  @action clear = () => {
    this.counters = [];
  }
}