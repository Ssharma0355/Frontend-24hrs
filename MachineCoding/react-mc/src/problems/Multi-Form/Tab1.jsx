import React from 'react'

function Tab1({state,setState}) {
    const {name} = state;

    const handleChange=(e)=>{
        const {id, value} = e.target
        setState((prev)=>({...prev, [id]:value}))
    }

  return (
    <div>
        <h1>Name</h1>
        <input type="text" placeholder='Enter Name' id="name" value={name} onChange={handleChange} />
    </div>
  )
}

export default Tab1
