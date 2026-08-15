import React from 'react'

function ThirdCard({title, body}) {
  return (
    <div style={{border:"1px solid black",padding:"10px", margin:"10px"}}>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default ThirdCard
