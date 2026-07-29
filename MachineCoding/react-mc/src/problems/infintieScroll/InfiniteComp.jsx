import React from 'react'
import Card from './Card'

function InfiniteComp({data}) {
  return (
    <div style={{display:'flex', flexWrap:"wrap", gap:"1rem"}} >
        {data.map((d,id) =>(
            <Card key={id} title={d.title} body={d.body} />
        ))}
    </div>
  )
}

export default InfiniteComp
