import React, { useEffect, useState } from 'react'

function Throttling() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const getData = async()=>{
        const res =await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
        const resJson = await res.json();
        setData(resJson.recipes)
    }
    useEffect(()=>{
       setTimeout(()=>{
            getData()
        },2000)
    },[search])

  return (
    <div>
        <input type="text" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
        {data.map(d=>(
            <div key={d.id}>
                {d.name}
            </div>
        ))}
      
    </div>
  )
}

export default Throttling
