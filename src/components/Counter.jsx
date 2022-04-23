import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('counterStore')
@observer
class Counter extends React.Component {
  render() {
    const { count, decrease, increase } = this.props.counterStore;
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default Counter;
