import {observable, computed, action} from 'mobx';

export default class ObservableList {
  @observable items = [];

  @action addItem = (obj) => {
    this.items.push(obj);
  }

  @action removeItem = (index) => {
    this.items.splice(index, 1);
  }

  @action clear = () => {
    this.items = [];
  }

  @computed get size() {
    return this.items.length;
  }
}