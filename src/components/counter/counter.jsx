import React from 'react';
import './counter.css';
import CounterStar from '../counterStar/counterStar'

const Counter = (props) => {
    return(
        <div className='containerCounter'>
            <CounterStar />
            <h1 className="counter">{props.count}</h1>
        </div>
    )
}

export default Counter