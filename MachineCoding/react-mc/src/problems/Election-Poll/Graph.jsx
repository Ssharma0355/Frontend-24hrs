import React from 'react'

function Graph({height}) {
    const actual = Math.ceil(height/10)
    console.log(actual)
  return (
    <div style={{display:"flex",height:"20px", width:"300px", border:"1px solid black", borderRadius:"12px"}}>
        <div style={{width:`${actual}%`, backgroundColor:"gray",borderRadius:"12px"}}>
       <span style={{color:"black"}}>{height}</span>
        </div> 
    </div>
  )
}

export default Graph
