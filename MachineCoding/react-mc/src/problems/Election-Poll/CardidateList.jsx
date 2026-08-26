import React from 'react'

function CardidateList({id, fname, lname, onClick}) {
  return (
    <div
    onClick={()=>{onClick(id)}}
     style={{border:"1px solid black", width:"250px", padding:"12px", margin:"12px", cursor:"pointer", borderRadius:"12px"}}>
        <h2 style={{textAlign:"center", alignContent:"center"}}> {fname} {lname}</h2>
    </div>
  )
}

export default CardidateList
