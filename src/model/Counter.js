import {observable, computed, action} from 'mobx';

export default class Counter {
  id = null;
  @observable count = 0;

  constructor(id) {
    this.id = id;
  }

  @action increment = () => {
    this.count += 1;
  }

  @action decrement = () => {
    this.count -= 1;
  }

  @action reset = () => {
    this.count = 0;
  }
}