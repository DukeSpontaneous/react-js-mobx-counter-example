import { observable, action } from 'mobx';

const counterStore = observable({
  count: 0,
  decrease: action('Plus One', function () {
    counterStore.count -= 1;
  }),
  increase: action('Minus One', function () {
    counterStore.count += 1;
  }),
});

export default counterStore;
