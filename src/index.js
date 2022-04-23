import React from 'react';
import { render } from 'react-dom';

import counterStore from './stores/counterStore';
import Counter from './components/Counter';

import { Provider } from 'mobx-react';

const stores = {
  counterStore,
};

render(
  <Provider {...stores}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);
