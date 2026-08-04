import React, { useState } from 'react'

function DocCard({id,title, user,userId, completed}) {
  const [check, setCheck] = useState(false)
    const Changecheck =()=>{
        setCheck(prev => !prev)
    
  }
    return (
    <div style={{border:"1px solid black",padding:"12px", borderRadius:"12px", margin:"12px", width:"200px"}}>
      <input type="checkbox" checked={completed} /><p>{title}</p>
       <p>Id: {id}</p>
        <p>User: {userId}</p>
        <p>Completed: {completed?"Completed":"Pending"}</p>
    </div>
  )
}

export default DocCard
