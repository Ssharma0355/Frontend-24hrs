import React, { useEffect, useState } from 'react'
import Prodlist from './Prodlist';

function MainApp() {
    const [data, setData] = useState([]);
    const [add, setAdd] = useState(0);
    const addedCart =()=>{
        setAdd(prev => prev+1)
    }
    const removeCart=()=>{
        setAdd(prev => prev -1)
    }
    const getData = async()=>{
        const res = await fetch("https://dummyjson.com/products") 
        const resJson = await res.json()
        setData(resJson.products)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {data.map(d=>(
        <Prodlist key={d.id} add={add} addedCart={addedCart} removeCart={removeCart} title={d.title} img={d.thumbnail} price={d.price} />
        ))}
    </div>
  )
}

export default MainApp
