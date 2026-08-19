import React from 'react'

function ProgressBar({value}) {
    const rate= value;
    console.log(rate)
  return (
    <div style={{width:"300px", height:"12px", border:"1px solid black", borderRadius:"12px"}}>
        <div style={{width:`${rate}%`,backgroundColor:"red", height:"12px", borderRadius:"12px"}} >
        </div>
    </div>
  )
}

export default ProgressBar
