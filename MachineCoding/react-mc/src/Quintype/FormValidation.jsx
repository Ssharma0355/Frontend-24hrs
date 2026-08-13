import React, { useState } from 'react'

function FormValidation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const login =()=>{
        if(!email.includes('@') || email.length<=4){
            setError("Invalid Email")
            return
        }
        if(!password.trim() || password.length<=4){
            setError("Password Invalid")
            return
        }

        alert("Login Successfully")
        setEmail("")
        setPassword("")
        setError("")
    }

  return (
    <div>
        <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br />

        <br />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <br />

        {error.length>0 &&<p style={{color:"red"}}>{error}</p>  }
        <br />
        <button onClick={login}>Login in</button>
    </div>
  )
}

export default FormValidation
