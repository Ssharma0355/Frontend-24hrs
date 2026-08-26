import React, { useEffect, useState } from 'react'

function SearchBar({searchResult, setSearchResult}) {
    const [searchBar, setSearch]= useState("")
    useEffect(()=>{
        const Timer = setTimeout(()=>{
            const getSearchResult=async()=>{
                const res = await fetch(`https://dummyjson.com/users/search?q=${searchBar}`)
                const resJson = await res.json()
                setSearchResult(resJson)
            }
            getSearchResult()
        },1000)
        return ()=>{clearTimeout(Timer)}
    },[searchBar])
    console.log(searchResult)
  return (
    <div>
      <input style={{height:"20px", width:"310px",padding:"8px"}}
       type="text" value={searchBar}
       onChange={(e)=>{setSearch(e.target.value)}} 
       />
    </div>
  )
}

export default SearchBar
