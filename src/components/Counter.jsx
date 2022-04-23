import React from 'react';
import { inject, observer } from 'mobx-react';

const Counter = ({ counterStore: { count, decrease, increase } }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
);

export default inject('counterStore')(observer(Counter));
