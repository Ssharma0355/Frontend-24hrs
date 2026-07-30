import React from 'react'
import VirtualList from './VirtualList'

function VirtualScroll() {
    const List = Array.from({length :100}, (_,index)=> index+1)
    console.log(List)
  return (
        <VirtualList list={List} height={400} width={300} itemHeight={35} />
  )
}

export default VirtualScroll
