import React, { useEffect, useState } from 'react'

function AutoSearch() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const getData = async()=>{
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
        const resJson = await res.json();
        setData(resJson.recipes)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getData()
        }, 2000)
        return ()=>{clearTimeout(timer)}
    },[search])
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value )} />

        <div>
            {data.map(d =>(
                <p key={d.id}>{d.name}</p>
            ))}
        </div>
    </div>
  )
}

export default AutoSearch
