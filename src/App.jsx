import DashboardRouter from "./DashboardRouter";
import AuthRouter from "./AuthRouter";
import { useUser } from "./hooks/useUser";
import { useDashboard } from "./hooks/useDashboard";
import { LoadDashboard } from "./components/LoadDashboard";

function App(){
  const { user } = useUser()
  const {dashboard} = useDashboard()
  console.log("dashboard: ", dashboard)

  return user? (dashboard? <DashboardRouter/> : <LoadDashboard/>)  : <AuthRouter/>
}

export default App