import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] =useState("")
    const [loading, setLoading] = useState(null)


    useEffect(()=>{
        const controller = new AbortController();

        const getUser = async()=>{
            try{
                setLoading(true)
                const res = await fetch(url,{
                    signal:controller.signal
                })
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                const resJosn = await res.json()
                setData(resJosn.users ||[])
            }
            catch(err){
                if (err.name === "AbortError") {
                    console.log("Request cancelled");
                    return;
                }
                setError(err.message);
            }
            finally{
                setLoading(false)
            }
        }
        getUser()
        return ()=>{
            controller.abort();
        }
    },[url])
    console.log(data)
  return {data, loading, error}
}

export default useFetch
