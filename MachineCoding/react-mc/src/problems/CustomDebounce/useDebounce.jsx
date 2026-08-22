import { useEffect, useState } from 'react'

// Removed the object destructuring {} here
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    
    useEffect(() => {
        const Timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => { clearTimeout(Timer) }
    }, [value, delay])
    
  return debounceValue
}

export default useDebounce