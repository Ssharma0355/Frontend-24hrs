import React from 'react'

function Card({id, title, body}) {
  return (
    <div style={{display:"flex", border:"1px solid black",padding:"1rem"}}>
        <div style={{width:"300px"}}>
        <h1>{title}</h1>
       <p>{body}</p>
        </div>
    </div>
  )
}

export default Card
