import React from 'react'

function Tab3({state,setState}) {
    const {password} = state

    const handleChange=(e)=>{
        const {id, value}= e.target
        setState((prev)=>({...prev, [id]:value}))
    }
  return (
    <div>
        <h1>Password</h1>
        <input type="password" id="password" placeholder='Enter your password' value={password} onChange={handleChange} />
    </div>
  )
}

export default Tab3
