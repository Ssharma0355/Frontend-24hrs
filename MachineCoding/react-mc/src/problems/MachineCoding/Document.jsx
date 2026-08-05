import React, { useEffect, useState } from 'react'
import DocCard from './DocCard';

function Document() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    let api = "https://jsonplaceholder.typicode.com/todos"

    const getData = async()=>{
        try{
            setLoading(true)
            const res = await fetch(api);
            const resJson = await res.json();
            setData(resJson)
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

    if(loading){
    return  <p>Loading...</p>
    } 

  return (
    <div style={{margin:"12px"}}>
        {data.map(d=>(
            <DocCard key={d.id} id={d.id} title={d.title} user={d.user} userId={d.userId} completed={d.completed}/>
        ))}
      
    </div>
  )
}

export default Document
