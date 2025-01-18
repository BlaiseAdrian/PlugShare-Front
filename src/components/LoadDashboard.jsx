import { Button, Alert, Spinner } from "react-bootstrap"
import { useDashboard } from "../hooks/useDashboard"
import { useFetch } from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"
import { useRef } from "react"

const API = "https://api-plugshare.growthspringers.com"


export function LoadDashboard(){

  const dataRef = useRef({})
  const dashboard = dataRef.current

  const { setDashboard} = useDashboard()
  const {user} = useUser()

  const {
    isLoading: isLoadingProfile,
    error: errorProfile,
    fetchData: fetchProfile
  } = useFetch(API + `/users?user_id=${user}`,  onSuccessProfile)

  const {
    isLoading: isLoadingNeeds,
    error: errorNeeds,
    fetchData: fetchNeeds
  } = useFetch(API + `/communityneeds`, onSuccessNeeds)

  const {
    isLoading: isLoadingSolutions,
    error: errorSolutions,
    fetchData: fetchSolutions
  } = useFetch(API + `/all_solutions`, onSuccessSolutions)

  const isLoading = isLoadingProfile || isLoadingNeeds  || isLoadingSolutions
  const error = errorProfile || errorNeeds  || errorSolutions

  function onSuccessProfile(data){
    dashboard.profile = data
    if (dashboard.profile && dashboard.needs && dashboard.solutions){
      setDashboard(dashboard)
    }
  }

  function onSuccessNeeds(data){
    dashboard.needs = data
    if (dashboard.profile && dashboard.needs && dashboard.solutions){
      setDashboard(dashboard)
    }
   
  }

  function onSuccessSolutions(data){
    dashboard.solutions = data 
    if (dashboard.profile && dashboard.needs && dashboard.solutions){
      setDashboard(dashboard)
    }
  }
  
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
              onClick = { ()=>{ fetchProfile(), fetchNeeds(), fetchSolutions() } }
            >
              Retry
            </Button>
          </div>
        }
      </div>
    </div>
  )
}