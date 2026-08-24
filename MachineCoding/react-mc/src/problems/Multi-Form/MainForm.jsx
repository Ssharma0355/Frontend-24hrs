import React, { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3';

function MainForm() {
    const [index, setIndex] = useState(0);
    const [state, setState] = useState({name:"",email:"",password:""})
    const [error, setError] = useState("")

    const {name, email, password} = state
    const config =[
        {
            name:"name", 
            component:Tab1,
            validaite:()=>{
                if(name.trim()===""||name.length<3){
                    setError("Name is Error")
                    return false
                }
                return true;
            }
        },
        {
            name:"email",
            component:Tab2,
            validaite:()=>{
                if(!email.includes("@")){
                    setError("Email is invalid")
                    return false
                }
                return true;
            }
        },
        {
            name:"password",
            component:Tab3,
            validaite:()=>{
                if(password.length<5){
                    setError("Password Invalid")
                    return false
                }
                return true;
                
            }
        }
    ]

    const CurrentTab = config[index].component
    const selectTab=(id)=>{
        setIndex(id)
    }
    console.log(state)

    const goPrev =()=>{
        setIndex(prev =>prev-1)
    }
    const goNext=()=>{
        const isValid = config[index].validaite()
        console.log(isValid)
        if(!isValid){
            console.log(isValid)

            return
        }
        setIndex(prev=>prev+1)
        setError("")
     
    }

    const onSubmit=()=>{
        console.log(state)
        alert("Submitted")
    }
   
  return (
    <div>
        {
            config.map((c,index)=>(
                <button onClick={()=>selectTab(index)} key={index}>{c.name}</button>
            ))
        }
        <CurrentTab setState={setState} state={state} />
        {error && <p style={{color:"red"}}>{error}</p>}
        <button onClick={goPrev} disabled={index===0}>Previous</button>
        {index=== config.length-1 ?
            <button onClick={onSubmit} >Submit</button>
         :
         <button onClick={goNext} disabled={index===config.length-1}>Next</button>
    }


    </div>
  )
}

export default MainForm
