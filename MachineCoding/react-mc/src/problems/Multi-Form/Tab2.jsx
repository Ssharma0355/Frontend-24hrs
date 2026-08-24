import React, { useState } from 'react'

function Tab2({state, setState}) {
    const {email} = state

    const handleChange =(e)=>{
        const {id, value} = e.target;
        setState((prev)=>({...prev, [id]:value})) 
    }

  return (
    <div>
        <h1>Email</h1>
        <input type="text" value={email} id='email' onChange={handleChange} />
    </div>
  )
}

export default Tab2
