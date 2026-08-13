import React, { useEffect, useState } from 'react'

function SearhAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null)
    // spi => https://dummyjson.com/recipes/search?q=Margherita
    const getData = async ()=>{
        try{
            setLoading(true);
            const res = await fetch('https://dummyjson.com/recipes')
            const resJson = await res.json()
            setData(resJson.recipes)
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
        return <p>Loading</p>
    }
    
  return (
    <div>
        {data.map(food =>(
            <li key={food.id}>{food.name}</li>
        ))}
      
    </div>
  )
}

export default SearhAPI
