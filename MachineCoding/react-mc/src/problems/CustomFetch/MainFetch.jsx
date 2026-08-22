import React, { useEffect } from 'react'
import useFetch from './useFetch'

function MainFetch() {
    let url = "https://dummyjson.com/users"
    const {data, loading, error} = useFetch(url)
    console.log(data)

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
  return (
    <div>
        hi
       
        {data.map(d=>(
            <div key={d.id}>{d.firstName}</div>
        ))}

    </div>
  )
}

export default MainFetch
