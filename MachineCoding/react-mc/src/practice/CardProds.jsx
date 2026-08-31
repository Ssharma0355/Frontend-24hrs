import React from 'react'

function CardProds({title, thumbnail}) {
  return (
    <div>
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
    </div>
  )
}

export default CardProds
