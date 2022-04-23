import { makeObservable, observable, action } from 'mobx';

class CounterStore {
  @observable count = 0;

  constructor() {
    makeObservable(this);
  }

  @action decrease = () => {
    this.count -= 1;
  };

  @action increase = () => {
    this.count += 1;
  };
}
const counterStore = new CounterStore();

export default counterStore;
