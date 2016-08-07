import {observable, computed, action} from 'mobx';

export default class CounterModel {
  @observable count = 0;

  @action increment() {
    this.count += 1;
  }

  @action decrement() {
    this.count -= 1;
  }

  @action reset() {
    this.count = 0;
  }
}