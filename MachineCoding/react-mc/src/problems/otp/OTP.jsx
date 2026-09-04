import React, { useState } from 'react'

function OTP() {
    const OTP_Digit_Count = 5;
    const [otpArr, setOtpArr] = useState(new Array(OTP_Digit_Count).fill())
    const handleOnChange = (value,index) => {
        if(isNaN(value))return
        // ["","","",""]
        console.log(value,index)
        const newArr = [...otpArr]
        newArr[index] = value.slice(-1)
        setOtpArr(newArr)
    }
  return (
    <div>
        <h1>OTP Digit</h1>
        {/* ask interview for digit */}
        {otpArr.map((input, index)=>{
            return <input 
            key={index}
            type='text'
            value={otpArr.index} 
            onChange={(e)=>{handleOnChange(e.target.value, index)}}
            />
        })}
    </div>
  )
}

export default OTP
