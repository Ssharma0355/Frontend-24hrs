import React, { useEffect, useState } from 'react'
import CardidateList from './CardidateList';
import CandidateDetails from './CandidateDetails';

function MainElection() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(null)
    const [limit, setLimit] = useState(5)
    const [skip, setSkip] = useState(10)
    const [userId, setUserId] = useState(1)
    const [userInfo, setUserInfo] = useState([])

    const getUsers = async()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,age`)
            const resJson = await res.json()
            setData(resJson.users)
            setUserId(resJson.users[0].id)
            setUserInfo(resJson.users[0])
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
    
const selectId=(id)=>{
    setUserId(id)
}

    if(isLoading) return <h1>Loading....</h1>
  return (
    <div >
        <h1>List of Candidates</h1>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div>
        {data.map(d=>(
            <CardidateList onClick={()=>{selectId(d.id)}} key={d.id} id={d.id}fname={d.firstName} lname={d.lastName} />
        ))}
        </div>
        <div>
            <CandidateDetails setUserId={setUserId} userId={userId} userInfo={userInfo} setUserInfo={setUserInfo}/>
        </div>
        </div>
        <div>
            {[...Array()]}
         </div>
    </div>
  )
}

export default MainElection
