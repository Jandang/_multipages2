/* eslint-disable react/prop-types */

// import { useState } from 'react';

import './Variable.css';

function Variable({type, name, value, setValue}) {



    return ( 
        <div className="variable-container">
            <h3 className="variable-title">{name || 'Variable'}</h3>
            <button className='btn btn-danger variable-button' onClick={() => setValue(value - 1)}>-</button>
            <span className='variable-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
            <button className='btn btn-success variable-button' onClick={() => setValue(value + 1)}>+</button>
        </div>
     );
}

export default Variable;