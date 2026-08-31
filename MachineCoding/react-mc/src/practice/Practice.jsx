import React, { lazy, Suspense, useEffect, useState } from 'react'
const CardProds = lazy(()=>import("./CardProds"))

function Practice() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const getProd = async()=>{
        try{
            setLoading(true)
            const res = await fetch("https://dummyjson.com/products?limit=500");
            const resJson = await res.json()
            setData(resJson.products)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getProd()
    },[])
    //pagination logic
    const total_pages=10
    const Total_no_prods = data.length
    const Total_no_pages = Math.ceil(Total_no_prods/total_pages)
    const Start =  currentPage* total_pages
    const End =  Start+total_pages

    const selectPage=(id)=>{
        setCurrentPage(id)
    }
    const goPrev=()=>{
        setCurrentPage(prev =>prev-1)
    }
    const goNext=()=>{
        setCurrentPage(prev =>prev+1)
    }

    if(loading) return <p>Loading...</p>
  return (
    <div>
        <div style={{display:"flex"}}>
            <button disabled={currentPage===0} onClick={goPrev}>Previous</button>
        {[...Array(Total_no_pages).keys()].map(n=>(
            <p onClick={()=>{selectPage(n)}} style={{padding:"4px",cursor:"pointer", border:"1px solid black",margin:"4px", backgroundColor:currentPage===n?"gray":""}} key={n}>{n+1}</p>
        ))}
        <button disabled={currentPage===Total_no_pages-1} onClick={goNext}>Next</button>
        </div>
     
        <div style={{display:"flex", flexWrap:"wrap"}}>
        <Suspense fallback={<p>Page is loading</p>}>
        {data.slice(Start,End).map((p)=>(
         <CardProds key={p.id} title={p.title} thumbnail={p.thumbnail} />
        ))}
        </Suspense>
        </div>
    </div>
  )
}

export default Practice
