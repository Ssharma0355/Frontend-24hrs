import React, { useEffect, useState } from 'react'
import PageList from './PageList';

function Pagination() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null)
    const [intialPage, setInitialPage] = useState(1)
    // https://onecompiler.com/react/44yss9jr9

    const getData = async () =>{
        try{
            setLoading(true)
            const res = await fetch("https://dummyjson.com/products?limit=500")
            const resJson = await res.json();
            setData(resJson.products)
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
    },[])

    const Total_No_Products = data.length;
    const Total_No_Page = 10
    console.log(Total_No_Products)
    const Total_No_Pages = Math.ceil(Total_No_Products/Total_No_Page)
    console.log(Total_No_Pages)
    const start = intialPage*Total_No_Page;
    const end = start+Total_No_Page;

    const selectPage=(n)=>{
        setInitialPage(n)
        console.log(intialPage)
    }

    const getPrev=()=>{
        selectPage(prev => prev-1)
    }
    const getNext=()=>{
        selectPage(prev => prev+1)
    }

   if(loading) { return <p> Loading</p>}

  return (
    <div> 
    <div style={{display:"flex", gap:"12px"}}>
    <button disabled={intialPage===0} onClick={getPrev}>Previous</button>
    {[...Array(Total_No_Pages).keys()].map(n=>(
        <p
        style={{padding:"8px", width:"12px", border:"1px solid black", backgroundColor: intialPage === n?"red":""}}
         key={n}
         onClick={()=>{selectPage(n)}}
         
         >{n}</p>

    ))}
        <button disabled={intialPage === Total_No_Pages-1} onClick={getNext}>Next</button>
    
    </div>

    <div style={{display:"flex", flexWrap:"wrap", gap:"1rem"}}>
    {data.slice(start,end).map((p)=>(
        <PageList key={p.id} title={p.title} description={p.description} thumbnail={p.thumbnail} />
        ))}
    </div>
        
    </div>
  )
}

export default Pagination
