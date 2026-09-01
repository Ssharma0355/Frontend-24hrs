import React, { useEffect, useState } from 'react'
import CarScrolly from './CarScrolly'

function Scrolly() {
    const [data, setData] = useState([])
    const[loading ,setLoading] = useState(null)
    const [error, setError] = useState("")
    const[page, setPage] = useState(1)
    const getPosts =async ()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
            const resJson = await res.json()
            setData(prev=>([...prev,...resJson]))
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getPosts()
    },[page])

    // infintine scroll logic
    const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
            setPage(prev => prev+1)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return()=>{window.removeEventListener("scroll",handleScroll)}
    })
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        {data.map(p=>(
            <CarScrolly key={p.id} title={p.title} boody={p.body} />
        ))}
        {loading && <p>Loading....</p>}
    </div>
  )
}

export default Scrolly
