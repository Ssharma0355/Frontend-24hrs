import React from 'react'

function DateOfBirth({data, setData}) {
  const {dob} = data
  const handleChange =(e)=>{
    const {value, id} = e.target
    setData(prev => ({...prev, [id]:value}))
  }
  console.log(dob)
  return (
    <div>
      DateOfBirth
      <input type="date" name="dob" id="dob" value={dob} onChange={handleChange} />
    </div>
  )
}

export default DateOfBirth
