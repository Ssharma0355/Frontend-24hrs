import React, { useEffect, useState } from 'react'
import ShowImg from './ShowImg';

function Carausel() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);

    const getData=async()=>{
        const res = await fetch("https://dummyjson.com/products")
        const resjson = await res.json();
        setData(resjson.products)
    }
    console.log(data)

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIndex(prev => (prev+1)%data.length)
        },2000)

        return()=>{
            clearTimeout(timer)
        }

    },[index])


    const total_Products = data.length
    console.log(total_Products)
    const start = index*1;
    const end = start+1;

    const selectImg =(n)=>{
        setIndex(n)
    }

    const getPrevious=()=>{
        if(index === 0){
            setIndex(data.length)
        }
        setIndex(prev=> prev-1)
    }

    const getNext=()=>{
        if(index === data.length-1){
            setIndex(0)
        }
        setIndex(prev=> prev+1)
    }

    return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <div>
            <div style={{display:"flex",justifyContent:"center"}}>

            <button 
            onClick={getPrevious}
            
            style={{display:"flex",height:"20px"}}>previous</button>

            {data.slice(start,end).map(img=>(
            <div key={img.id}>
              <img src={img.thumbnail} alt="" />
            </div>
            ))}
             <button
               onClick={getNext}
             style={{display:"flex",height:"20px"}}>next</button>


        
            </div>
       
         <div style={{display:"flex", gap:"12px"}}>
        {[...Array(total_Products).keys()].map(n=>(
            <p
            style={{padding:"10px", border:"1px solid black", cursor:'pointer', backgroundColor: index=== n ?"red":""}}
            onClick={()=>{
                selectImg(n)
            }}
             key={n}>{n}</p>
        ))}
        </div>

        </div>
       
      
        
    </div>
  )
}

export default Carausel
