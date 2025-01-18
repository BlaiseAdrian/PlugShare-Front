import { Button, Alert, Spinner } from "react-bootstrap"
import { useDashboard } from "../hooks/useDashboard"
import { useFetch } from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"
import { useRef } from "react"
import { useData } from "../hooks/useData"

const API = "https://api-plugshare.growthspringers.com"


export function LoadDashboard(){

  const dataRef = useRef({})

  const { setDashboard, dashboard } = useDashboard()
  const { setData, setSolutions} = useData()
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
    dataRef.current = { ...dataRef.current, profile: data }
    if (dataRef.current.profile && dataRef.current.needs && dataRef.current.solutions){
      setDashboard({
        profile: {
            ...dataRef.current.profile,
            needs: transformNeeds(dataRef.current.profile.needs)},
        needs: transformNeeds(dataRef.current.needs.top_needs),
        solutions: transformSolutions(dataRef.current.solutions.all_solutions)
      })
      setData(transformNeeds(dataRef.current.needs.top_needs))
      setSolutions(transformSolutions(dataRef.current.solutions.all_solutions))

    }
  }

  function onSuccessNeeds(data){
    dataRef.current = { ...dataRef.current, needs: data }
    if (dataRef.current.profile && dataRef.current.needs && dataRef.current.solutions){
      setDashboard({
        profile: {
            ...dataRef.current.profile,
            needs: transformNeeds(dataRef.current.profile.needs)},
        needs: transformNeeds(dataRef.current.needs.top_needs),
        solutions: transformSolutions(dataRef.current.solutions.all_solutions)
      })
      setData(transformNeeds(dataRef.current.needs.top_needs))
      setSolutions(transformSolutions(dataRef.current.solutions.all_solutions))
    }
   
  }

  function onSuccessSolutions(data){
    dataRef.current = { ...dataRef.current, solutions: data }
    if (dataRef.current.profile && dataRef.current.needs && dataRef.current.solutions){
      setDashboard({
        profile: {
            ...dataRef.current.profile,
            needs: transformNeeds(dataRef.current.profile.needs)},
        needs: transformNeeds(dataRef.current.needs.top_needs),
        solutions: transformSolutions(dataRef.current.solutions.all_solutions)
      })
      setData(transformNeeds(dataRef.current.needs.top_needs))
      setSolutions(transformSolutions(dataRef.current.solutions.all_solutions))
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


function transformNeeds(needs){
  let all_needs = [];
  
  needs.forEach((need) => {
    all_needs = all_needs.concat(need.needs);
  });

  
  all_needs = all_needs.map((need) => {
    return {
      ...need,
      owner: [],
      sub_category: need.need_sub_category,
      location: [need.location],
      details: need.purpose,
      id: need.need_id
    };
  });
  
  return all_needs
}

function transformSolutions(solutions){
  return solutions.map((solution)=>{
    return {
      ...solution,
      alternatives: solution.alternative_solutions,
      endorsers: solution.endorsements
    }
  })
}