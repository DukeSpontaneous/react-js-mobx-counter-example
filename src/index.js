import React from 'react';
import { render } from 'react-dom';

import counterStore from './stores/counterStore';
import Counter from './components/Counter';

const stores = {
  counterStore,
};

render(<Counter {...stores} />, document.querySelector('#root'));
