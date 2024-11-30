import { Button, Alert, Spinner } from "react-bootstrap"
import { useDashboard } from "../hooks/useDashboard"
import { useFetch } from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"

const API = "https://api-plugshare.growthspringers.com"


export function LoadDashboard(){

  const { setDashboard } = useDashboard()
  const {user} = useUser()
  const { isLoading, error, data, fetchData} = useFetch(API + `/users?user_id=${user}`, onSuccess = onSuccess)

  function onSuccess(data){
    setDashboard( {profile: data})
  }
  
  return(
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}} >
      <div className="text-center" style={{height: "100px", width: "500px"}} >
        { 
          isLoading &&
          <div className="">
            <Spinner className="mb-4" variant = "primary" />
            <p className="h4" >Loading Dashboard ...</p>
          </div> 

        }
        { 
          error && 
          <div>
            <Alert className="mb-4" variant = "danger" >
              <Alert.Heading> Failed to load dashboard</Alert.Heading>
              <p> { error.message } </p>
            </Alert>
            <Button className="px-4" variant="primary" onClick = {fetchData} >Retry</Button>
          </div>

        }
      </div>

    </div>

  )
}