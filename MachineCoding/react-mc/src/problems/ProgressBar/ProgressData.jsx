import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

function ProgressData() {
    const [rate, setRate] = useState(0);

    useEffect(()=>{
        const Timer = setTimeout(()=>{
            if(rate === 100){
                setRate(0)
            }
            setRate(prev => prev+1)
        },100)

        return ()=>{
            clearTimeout(Timer)
        }
    },[rate])
  return (
    <div>
        <ProgressBar  value={rate}/>
    </div>
  )
}

export default ProgressData
