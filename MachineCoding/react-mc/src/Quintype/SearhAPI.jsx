import React, { useEffect, useState } from 'react'

function SearhAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null)
    const [search, setSearch] = useState("")
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

    const filtereddata = data.filter(f => f.name.toLowerCase().includes(search.toLowerCase()))



    if(loading){
        return <p>Loading</p>
    }

  return (
    <div>
        <div>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
        {filtereddata.map(food =>(
            <li key={food.id}>{food.name}</li>
        ))}
      
    </div>
  )
}

export default SearhAPI
