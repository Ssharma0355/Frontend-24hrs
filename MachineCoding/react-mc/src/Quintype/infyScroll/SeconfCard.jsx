import React from 'react'
import ThirdCard from './ThirdCard'

function SeconfCard({data}) {
  return (
    <div>
        {data.map(d=>(
         <ThirdCard key={d.id} title={d.title} body={d.body} />
        ))}
    </div>
  )
}

export default SeconfCard
