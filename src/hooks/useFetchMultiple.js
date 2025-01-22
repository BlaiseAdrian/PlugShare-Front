import { useFetch } from "./useFetch";

export function useFetchMultiple(endpoints, onSuccess = ()=>{}){

  let isLoading = false
  let error = null
  let data = null
  let requests = []
  let completed = 0
  
  endpoints.forEach((endpoint) => {
    requests.push(useFetch(endpoint))
  },)

  for (let request of requests){
    if (request.error) error = request.error
    if (request.isLoading) isLoading = true
    if (request.data) completed++
  }

  if (completed == endpoints.length) {
    data = []
    requests.forEach((request) => {
      data.push(request.data)
    })
    onSuccess(data)
  }


  function retryFetch(){
    requests.forEach((request) => {
     if(!request.data) request.fetchData()
    })
  }

  return { isLoading, error, data, retryFetch }
}