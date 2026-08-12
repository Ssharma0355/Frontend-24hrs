import React, { useEffect, useState } from 'react'
import DocCard from './DocCard'

function DocSearch({api}) {
    const [search, setSearch] = useState("")
    const [fetchedData, setFetchedData] = useState([])
    const getData = async ()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${search}`)
        const resJson = await res.json()
        setFetchedData(resJson);
    }
    useEffect(()=>{
        const Timer = setTimeout(()=>{
            getData()
        },2000)
        return()=>{
            clearTimeout(Timer)
        }
    },[search])

  return (
    <div>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
        {fetchedData.map(d=>(
            <li key={d.id}>{d.title}</li>
        ))}
      
    </div>
  )
}

export default DocSearch
