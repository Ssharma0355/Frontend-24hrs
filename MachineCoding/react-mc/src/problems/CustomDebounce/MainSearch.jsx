import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

function MainSearch() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const DebouncedValue = useDebounce(search, 2000);
    
    useEffect(() => {
        // If the search is cleared out, we should also clear the results
        if (!DebouncedValue) {
            setData([])
            return
        }
        
        const getData = async () => {
            try {
                const getRes = await fetch(`https://dummyjson.com/recipes/search?q=${DebouncedValue}`)
                const resJson = await getRes.json();
                
                // FIXED: Changed 'recipies' to 'recipes'
                // Added a fallback to an empty array just in case
                setData(resJson.recipes || [])
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        }
        getData()

    }, [DebouncedValue])
    
  return (
    <div>
        <input 
            type="text" 
            value={search} 
            onChange={(e) => {setSearch(e.target.value)}} 
            placeholder="Search recipes..."
        />
        {/* Safe mapping using optional chaining (?) */}
        {data?.map(d => (
            <div key={d.id}>{d.name}</div>
        ))}
    </div>
  )
}

export default MainSearch