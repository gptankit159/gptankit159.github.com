import React , { useState } from 'react';
import './App.css';

const Counter = () =>{
    let [count , setCount] = useState(0);
    const func = () =>{
        setCount(++count);
    }
    return(
        <div className="count">
            <button onClick={func}>{count}</button>
        </div>
    );
}
export default Counter;