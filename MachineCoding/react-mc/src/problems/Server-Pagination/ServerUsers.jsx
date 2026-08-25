import React, { useEffect, useState } from 'react'
import UsersList from './UsersList'
import UserInfo from './UserInfo'

function ServerUsers() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState("")
    const [userId, setUserID] = useState(1)
    const [userData, setUserData] = useState([])
    const [limit,setLimit] = useState(5)
    const [skip, setSkip] = useState(10)
    const [total, setTotal] = useState([])

    const getData = async()=>{
        try{
            setIsLoading(true)
            const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName`)
            const resJson = await res.json()
            setData(resJson.users)
            setUserID(resJson.users[0].id)
            setUserData(resJson.users[0])
            setTotal(resJson.total)
        }
        catch(err){
            setError(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[skip])

    const totalNoPages = Math.ceil(total/limit)
    console.log(totalNoPages)

    const selectPage=(id)=>{
        setSkip(id)
    }


if(isLoading){return <p>Loading....</p>}

  return (
    <div>
         <div style={{display:"flex"}}>
        <div style={{border:"1px solid black", width:"250px", padding:"12px"}}>
        {data.map(d=>(
                <UsersList key={d.id} id={d.id} fname={d.firstName} lname={d.lastName} />
        ))}
        </div>
        <div style={{border:"1px solid black", margin:"12px", padding:"12px", height:"300px", width:"250px"}}>
            <UserInfo userId={userId} userData={userData} />
        </div>
    </div>
    <div style={{display:"flex"}}>
    {[...Array(totalNoPages).keys()].map(n=>(
        <p onClick={()=>{selectPage(n)}} style={{cursor:"pointer",padding:"5px", border:"1px solid black", margin:"4px", backgroundColor:`${n === skip?"red":""}`}} key={n}>{n+1}</p>
    ))}
    </div>
  
    </div>

  )
}

export default ServerUsers
