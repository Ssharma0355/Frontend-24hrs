import React, { useEffect, useState } from 'react'

function ShowList() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const getData = async ()=>{
        try{
            setIsLoading(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    if(isLoading) return <p>Loading....</p>
  return (
    <div>
        {users.map(user =>(
            <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  )
}

export default ShowList
