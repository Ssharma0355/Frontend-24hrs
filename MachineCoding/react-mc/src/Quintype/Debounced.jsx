import React, { useEffect, useState } from 'react'

function Debounced() {
    const [data, setData] =useState([]);
    const [search, setSearch] =useState("")

    const getData = async()=>{
     const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
     const resJson = await res.json();
     setData(resJson.recipes)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getData()
        },3000)
        return ()=>{
            clearTimeout(timer)
        }
    },[search])
    
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {data.map(d =>(
            <li key={d.id}>{d.name}</li>
        ))}
      
    </div>
  )
}

export default Debounced
