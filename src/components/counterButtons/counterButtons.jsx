import React from 'react';
import './counterButtons.css';

const CounterButtons = (props) => {
    return(
        <div className='containerCounterButtons'>
            <button onMouseDown={props.countMouseDownMinus} onMouseUp={props.countMouseUp} onMouseLeave={props.countMouseLeave} onClick={props.countMinus} className="counterButtonMinus">-&nbsp;Minus</button>
            <button onMouseDown={props.countMouseDownPlus} onMouseUp={props.countMouseUp} onMouseLeave={props.countMouseLeave} onClick={props.countPlus} className="counterButtonPlus">Plus&nbsp;+</button>
        </div>
    )
}

export default CounterButtons