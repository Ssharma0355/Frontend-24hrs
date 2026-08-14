import React, { useEffect, useState } from 'react'
import SeconfCard from './SeconfCard'

function MainCard() {
    const [data, setData] = useState([])
    const [loading, setLoading] =useState(null)
    const [page, setPage] =useState(1)
    const getData = async ()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
            const resJson = await res.json();
            // setData(resJson)
            setData(prev => [...prev,...resJson])
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[page])

    const handleScroll= async()=>{
        try{
            if(window.innerHeight +document.documentElement.scrollTop + 1>= document.documentElement.scrollHeight){
                setPage(prev => prev+1)
            }
        }
        catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
  return (
    <div>
        <SeconfCard data={data} />
    </div>
  )
}

export default MainCard
