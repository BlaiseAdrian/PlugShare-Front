import { useState, useEffect } from "react";

export function useFetch(url){
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    async function fetchData(){
      try {
        const res = await fetch(url)
        if (res.ok){
          const data = await res.json()
          setData(data)
        } else {
          setError("Response is not okay")
          setData(null)
        }
      } catch(err){
        setError(err)
        setData(null)
      }
      setIsloading(false)
    }
    fetchData()
  })

  return {isLoading, data, error}

}