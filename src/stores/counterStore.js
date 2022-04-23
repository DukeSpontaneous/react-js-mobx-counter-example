import { observable, action, makeObservable } from 'mobx';

function createCounterStore() {
  return makeObservable(
    {
      count: 0,
      decrease() {
        this.count--;
      },
      increase() {
        this.count++;
      },
    },
    {
      count: observable,
      increase: action.bound,
      decrease: action.bound,
    }
  );
}

const counterStore = createCounterStore();

export default counterStore;
