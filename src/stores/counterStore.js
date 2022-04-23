import { makeAutoObservable } from 'mobx';

function createCounterStore() {
  return makeAutoObservable(
    {
      count: 0,
      decrease() {
        this.count--;
      },
      increase() {
        this.count++;
      },
    },
    {},
    { autoBind: true }
  );
}

const counterStore = createCounterStore();

export default counterStore;
