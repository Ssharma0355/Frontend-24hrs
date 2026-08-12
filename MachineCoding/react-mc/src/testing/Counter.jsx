import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const increase=()=>{
        setCount(prev => prev+1)
    }
    const decrease=()=>{
        setCount(prev => prev-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const chnageSign=()=>{
        setCount(prev => prev*-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={chnageSign}>Change Sign</button>
      
    </div>
  )
}

export default Counter
