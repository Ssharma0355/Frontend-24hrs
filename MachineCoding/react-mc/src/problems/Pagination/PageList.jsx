import React from 'react'

function PageList({title, description, thumbnail}) {
  return (
    <div style={{width:"300px", border:"1px solid black", padding:"12px"}}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default PageList
