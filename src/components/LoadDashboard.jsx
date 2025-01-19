import { Button, Alert, Spinner } from "react-bootstrap"
import { useDashboard } from "../hooks/useDashboard"
import { useUser } from "../hooks/useUser"
import { useFetchMultiple } from "../hooks/useFetchMultiple"
import { useEffect } from "react"

const API = "https://api-plugshare.growthspringers.com"


export function LoadDashboard(){

  const { setDashboard} = useDashboard()
  const {user} = useUser()

  const endpoints = [
    API + `/users?user_id=${user}`,
    API + `/communityneeds`,
    API + `/all_solutions`,
    API + '/all_needs'
  ]

  const {
    isLoading,
    error,
    data,
    retryFetch
   } = useFetchMultiple(endpoints)

  useEffect(()=> {
  if (data) {
    const [profile, needs, solutions, subcategories ] = data
    setDashboard({
      profile,
      needs,
      solutions,
      subcategories,
    })
  }
  }, [data])
  
  return(
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}} >
      <div className="text-center" style={{height: "100px", width: "500px"}} >
        { 
          isLoading &&
          <div className="">
            <h1 className="fw-bolder mb-5 display-3 " >Plug Share</h1>
            <Spinner variant = "secondary" />
          </div> 
        }
        { 
          error && 
          <div>
            <Alert className="mb-4" variant = "danger" >
              <Alert.Heading> Failed to load dashboard</Alert.Heading>
              <p> { error.message } </p>
            </Alert>
            <Button
              className="px-4"
              variant="primary"
              onClick = { retryFetch }
            >
              Retry
            </Button>
          </div>
        }
      </div>
    </div>
  )
}