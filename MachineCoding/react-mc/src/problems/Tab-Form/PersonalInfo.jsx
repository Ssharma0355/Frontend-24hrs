import React from 'react'

function PersonalInfo({data, setData}) {
    const {name} = data

    const handleChange =(e)=>{
        const {value,id} = e.target
        setData(prev => ({...prev, [id]:value}))
    }
    console.log(name)
    
  return (
    <div>
        PersonalInfo
        <input type="text" value={name} id='name' onChange={handleChange} />
    </div>
  )
}

export default PersonalInfo
