import { useState, useEffect } from "react";

export function useFetch(url){
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    async function fetchData(){
      try {
        const res = await fetch(url)
        const data = await res.json()
        if (data.status){
          setData(data)
        } else {
          setError(new Error(data.message))
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

  return { isLoading, data, error }

}