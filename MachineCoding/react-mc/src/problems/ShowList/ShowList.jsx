import React, { useEffect, useState } from 'react'

function ShowList() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [search, setSearch] = useState("")

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

    console.log(search)
       
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase())
        )


    if(isLoading) return <p>Loading....</p>
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {filteredUsers.map(user =>(
            <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  )
}

export default ShowList
