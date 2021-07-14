/* eslint-disable no-undef */
import React, { useState } from 'react'

const Counter = () => {

    const initialState = someExpensiveCalculations(); 

    const [count, setCount] = useState(initialState)
    const addOne = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={addOne}> + </button>
            <p>Value is {count}</p>
        </div>
    )
}

export default Counter
