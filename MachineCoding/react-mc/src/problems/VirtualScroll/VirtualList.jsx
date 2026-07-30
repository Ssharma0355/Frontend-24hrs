import React, { useState } from 'react'

function VirtualList({list, height, width, itemHeight}) {
    const [startIndex, setStartIndex] = useState([0, Math.floor(height/itemHeight)]);
    const visibleList  = list.slice(startIndex[0],startIndex[1]+1);

  return (
    <div style={{height,width ,backgroundColor:"gray"}}>
       {visibleList.map((item)=>{
        return <div key={item}>{"Item" + item}</div>
       }
       )}
      
    </div>
  )
}

export default VirtualList
