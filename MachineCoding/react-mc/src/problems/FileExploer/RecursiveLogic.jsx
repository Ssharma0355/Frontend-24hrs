import React, { useState } from 'react'
import data from "./data.json"

function List({list}){
    const [expand, setExpand] = useState(false)
    return(
        <div>
        {list.map((node)=>(
            <div key={node.id}>
                <p onClick={()=>{setExpand((prev)=>({...prev,[node.name]:!prev[node.name]}))}}>
                {node.isFolder?"+":"-"}
                {node.name}
                </p>
                {expand?.[node.name]&&<span><List list={node.children} /></span>}
            </div>
        ))}
        </div>
    )
}

function RecursiveLogic() {
    const [files, setFiles] = useState(data)
  return (
    <div>
      <List list={files} />
    </div>
  )
}

export default RecursiveLogic
