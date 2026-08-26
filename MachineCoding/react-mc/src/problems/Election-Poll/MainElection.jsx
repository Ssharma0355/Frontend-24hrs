import React, { use, useEffect, useState } from 'react'
import CardidateList from './CardidateList';
import CandidateDetails from './CandidateDetails';
import SearchBar from './SearchBar';

function MainElection() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(null)
    const [limit, setLimit] = useState(10)
    const [skip, setSkip] = useState(10)
    const [userId, setUserId] = useState(1)
    const [userInfo, setUserInfo] = useState([])
    const [total, setTotal] = useState(0)
    const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState("")

    const getUsers = async()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
            const resJson = await res.json()
            setData(resJson.users)
            setUserId(resJson.users[0].id)
            // setUserInfo(resJson.users[0])
            setTotal(resJson.total)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUsers()
    },[skip])
    
const selectId=(id)=>{
    setUserId(id)
}
const selectPage=(id)=>{
    setSkip(id)
}


const Pages = Math.ceil(total/limit)

const prevNext=()=>{
    setSkip(prev => prev+1)

}
const prevPage=()=>{
    setSkip(prev => prev-1)
}
const filteredData = data.filter(user => {
    // Check firstName, and use a dot for search.toLowerCase()
    return user.firstName && user.firstName.toLowerCase().includes(search.toLowerCase());
});

useEffect(()=>{
    if(filteredData.length ===0){return}
    setUserInfo(filteredData[0])
},[filteredData])




console.log("1st",filteredData[0])

    if(isLoading) return <h1>Loading....</h1>
  return (
    <div >
        <h1>List of Candidates</h1>
        <div>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div>
        {filteredData.length === 0 ? <>No Data</>:filteredData.map(d=>(
            <CardidateList onClick={()=>{selectId(d.id)}} key={d.id} id={d.id}fname={d.firstName} lname={d.lastName} />
        ))}
        </div>
        <div>{filteredData.length === 0 ? <></>:
            <CandidateDetails filteredData={filteredData} setUserId={setUserId} userId={userId} userInfo={userInfo} setUserInfo={setUserInfo}/>
        }
            </div>
        </div>
        <div style={{display:'flex'}}>
            <button disabled={skip==0} onClick={prevPage}>Previous</button>
            {[...Array(Pages).keys()].map(num =>(
                <p
                style={{border:"1px solid black", padding:"4px", margin:"4px",
                backgroundColor:`${num === skip?"gray":""}`
            }}
                onClick={()=>{selectPage(num)}}
                 key={num}>{num+1}</p>
            ))}
            <button disabled={skip === Pages-1} onClick={prevNext}>Next</button>
         </div>
    </div>
  )
}

export default MainElection
