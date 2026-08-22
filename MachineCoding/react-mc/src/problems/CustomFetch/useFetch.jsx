import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] =useState("")
    const [loading, setLoading] = useState(null)


    useEffect(()=>{
        const getUser = async()=>{
            try{
                setLoading(true)
                const res = await fetch(url)
                const resJosn = await res.json()
                setData(resJosn.users ||[])
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        getUser()
    },[url])
    console.log(data)
  return {data, loading, error}
}

export default useFetch
