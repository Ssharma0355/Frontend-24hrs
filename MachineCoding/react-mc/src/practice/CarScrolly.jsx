import React from 'react'

function CarScrolly({title, body}) {
  return (
    <div style={{border:"1px solid black", padding:"4px",margin:"4px"}}>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default CarScrolly
