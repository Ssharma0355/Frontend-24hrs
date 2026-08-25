import React, { useEffect } from 'react'

function UserInfo({userData}) {

    return (
    <div>
        <img src={userData.image} alt="" />
        <h1>{userData.firstName}</h1>
    </div>
  )
}

export default UserInfo
