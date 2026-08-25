import React, { useEffect } from 'react'
import Graph from './Graph'

function CandidateDetails({setUserInfo, userInfo, userId}) {

    const getUserInfo = async()=>{
        const getInfo = await fetch(`https://dummyjson.com/users/${userId}`)
        const inforJson = await getInfo.json()
        setUserInfo(inforJson)
    }
    useEffect(()=>{
        getUserInfo()
    },[userId])

  return (
    <div style={{border:"1px solid black", width:"100%", padding:"12px", margin:"12px", cursor:"pointer", borderRadius:"12px"}}>
        <div>
        <h2 style={{textAlign:"center", alignContent:"center"}}>
            {userInfo.firstName}
        </h2>
        <p>Height</p>
        <Graph height={userInfo.height} />
        <br />
        <p>weight</p>
        <Graph height={userInfo.weight} />
         </div>
        
    </div>
  )
}

export default CandidateDetails
