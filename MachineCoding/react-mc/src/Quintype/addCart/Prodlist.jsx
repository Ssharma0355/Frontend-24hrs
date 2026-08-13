import React from 'react'

function Prodlist({title, price, img,addedCart, add}) {
  return (
    <div style={{border:"1px solid black", margin:"12px", padding:"12px"}}>
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
        <button onClick={addedCart}>Add to cart</button>
        {add>0 && add}
    </div>
  )
}

export default Prodlist
