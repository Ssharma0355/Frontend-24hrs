import React from 'react'

function UsersList({id, fname, lname,onClick}) {


  return (
    <div
    onClick={()=>{onClick(id)}}
     style={{border:"1px solid black", margin:"4px", padding:"4px", borderRadius:"12px", cursor:"pointer"}}>
        <h3>{fname} {lname}</h3>
    </div>
  )
}

export default UsersList
