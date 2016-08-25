import {observable, computed, action} from 'mobx';

export default class Todo {
  @observable text = '';
  @observable isCompleted = false;

  constructor(text) {
    this.text = text;
  }

  @action toggleCompleted = () => {
    this.isCompleted = !this.isCompleted;
  }
}