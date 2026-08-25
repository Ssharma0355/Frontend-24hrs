import React, { useEffect, useState } from 'react'

function UserInfo({userData,userId, setUserID, setUserData}) {
    
    useEffect(()=>{
        const getUserInfo=async()=>{
            const res = await fetch(`https://dummyjson.com/users/${userId}`)
            const resJson = await res.json()
            setUserData(resJson)
        }
        getUserInfo()
    },[userId])

    return (
    <div>
        <img src={userData.image} alt="" />
        <h1>{userData.firstName}</h1>
    </div>
  )
}

export default UserInfo
