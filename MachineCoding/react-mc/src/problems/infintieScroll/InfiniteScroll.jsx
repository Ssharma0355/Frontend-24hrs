import React, { useEffect, useState } from 'react'
import InfiniteComp from './InfiniteComp'

function InfiniteScroll() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(null)

    const getData = async()=>{
      try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const resJson = await res.json()
        setData((prev)=>[...prev,...resJson])
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
    //handleInfiniteScroll logic
    const handleInfiniteScroll = async()=>{
      try{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ){
          setPage(prev => prev+1)
        }
      }
      catch(err){
        console.log(err)
      }
    }

    // effect to control the scroll
    useEffect(()=>{
      window.addEventListener("scroll", handleInfiniteScroll)

      return ()=>{
        window.removeEventListener("scroll", handleInfiniteScroll)

      }
    },[])
  return (
    <div>
        <InfiniteComp data={data} />
        {loading && <p>....Loading</p>}
    </div>
  )
}

export default InfiniteScroll
