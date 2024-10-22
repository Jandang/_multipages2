
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';
import Add from './Add/Add';
import Temperatures from './Temperatures/Temperatures';

import './Components.css';

function Components() {
    return ( 
        <div className='components-container'>
            <div className="components-top">
                <span>
                    <Counter />
                    <Timer />
                </span>
                <Add />
            </div>
            <Temperatures />
        </div>
     );
}

export default Components;