import DashboardRouter from "./DashboardRouter";
import AuthRouter from "./AuthRouter";
import { useUser } from "./hooks/useUser";
import { useDashboard } from "./hooks/useDashboard";
import { LoadDashboard } from "./components/LoadDashboard";

function App(){
  const { user } = useUser()
  const {dashboard} = useDashboard()
  const dashboardLoaded = dashboard?.profile && dashboard?.needs && dashboard?.solutions

  console.log("app", dashboard)

  return user? (dashboardLoaded? <DashboardRouter/> : <LoadDashboard/>)  : <AuthRouter/>
}

export default App