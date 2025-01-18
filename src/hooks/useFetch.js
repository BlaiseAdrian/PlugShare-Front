import { useState, useEffect } from "react";

export function useFetch(url, onSuccess = ()=>{}){
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    fetchData()
  }, [])

  async function fetchData(){
    setIsloading(true)
    setError(null)
    try {
      const res = await fetch(url, {
        headers: {
          Authorization : localStorage.getItem("access_token")
        }
      })
      const data = await res.json()
      if (data.status || res.ok){
        setData(data)
        onSuccess(data)
      } else {
        setError(new Error(data.message))
        setData(null)
      }
    } catch(err){
      setError(err)
      setData(null)
      console.log(err)
    }
    setIsloading(false)
  }

  return { isLoading, data, error, fetchData }

}