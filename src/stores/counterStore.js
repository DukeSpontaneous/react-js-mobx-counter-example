import { observable, action } from 'mobx';

const counterStore = observable({
  count: 0,
  decrease: action(function () {
    counterStore.count -= 1;
  }),
  increase: action(function () {
    counterStore.count += 1;
  }),
});

export default counterStore;
