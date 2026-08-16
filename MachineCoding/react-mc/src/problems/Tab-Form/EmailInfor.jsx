import React, { useState } from 'react'

function EmailInfor({data, setData}) {
    const {email} = data
    const handleChange =(e)=>{
        const [id, value] = e.target
        setData(prev => ({...prev, [id]:value}))
    }
  return (
    <div>
      Email Info
      <input type="email" id="email" value={email} onChange={handleChange} />
    </div>
  )
}

export default EmailInfor
