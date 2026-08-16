import React, { Component, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import EmailInfor from './EmailInfor'
import DateOfBirth from './DateOfBirth'

function ParentTab() {
    const [index, setIndex] = useState(0)
    const [data, setData] =useState({
        name:"", email:"", dob:"", password:""
    })
    console.log(name)

    const config = [
        {
            id:1,
            name:"Name",
            component: PersonalInfo
        },
        {
            id:2,
            name:"Email",
            component: EmailInfor
        },
        {
            id:3,
            name:"dob",
            component: DateOfBirth
        }
    ]

    const CurrentTab = config[index].component

    const selectTab=(id)=>{
        setIndex(id)
    }

  return (
    <div>
        {config.map(c =>(
            <button key={c.id} onClick={()=>{selectTab(c.id)}} >
                {c.name}
            </button>
        ))}
        <div>
        <CurrentTab data={data} setData={setData}/>
        </div>
    </div>
  )
}

export default ParentTab
