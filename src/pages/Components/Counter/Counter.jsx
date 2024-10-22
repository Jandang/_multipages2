/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Counter.css';

function Counter(props) {

    const [value, setValue] = useState(props.value || 0);

    function increment() {
        setValue(value + 1)
    }

    function decrement() {
        setValue(value - 1)
    }

    return (   
        <div className="counter-container">
            <h2 className='counter-title'>{props.name || 'COUNTEAR'}</h2>
            <button className='btn btn-danger counter-button' onClick={decrement}>-</button>
            <span className='counter-value'>{value}</span>
            <button className='btn btn-success counter-button' onClick={increment}>+</button>
        </div>
     );
}

export default Counter;