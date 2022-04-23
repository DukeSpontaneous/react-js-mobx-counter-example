import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  decrease = () => {
    this.count -= 1;
  };

  increase = () => {
    this.count += 1;
  };
}
const counterStore = new CounterStore();

export default counterStore;
