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
            id:0,
            name:"Name",
            component: PersonalInfo
        },
        {
            id:1,
            name:"Email",
            component: EmailInfor
        },
        {
            id:2,
            name:"dob",
            component: DateOfBirth
        }
    ]

    const CurrentTab = config[index].component

    const selectTab=(id)=>{
        setIndex(id)
    }
    const nextTab =()=>{
        setIndex(prev => prev+1)
    }

    console.log(config.length)
  return (
    <div>
        {config.map(c =>(
            <button key={c.id} onClick={()=>{selectTab(c.id)}} >
                {c.name}
                {c.name}

            </button>
        ))}
        <div>
        <CurrentTab data={data} setData={setData}/>
        </div>
        <div>
            {index<config.length-1 ?<button onClick={nextTab}>Next</button>:<button onClick={nextTab}>Submit</button> }
           
        </div>
    </div>
  )
}

export default ParentTab
