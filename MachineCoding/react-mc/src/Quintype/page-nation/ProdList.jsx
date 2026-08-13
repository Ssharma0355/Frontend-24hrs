import React from 'react'

function ProdList({title, img, id}) {
  return (
    <div style={{border:"1px solid black",margin:"12px", padding:"12px"}}>
        <img src={img} alt={title} />
        <h4>{title}</h4>
    </div>
  )
}

export default ProdList 
