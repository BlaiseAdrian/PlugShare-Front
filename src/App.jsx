import DashboardRouter from "./DashboardRouter";
import AuthRouter from "./AuthRouter";
import { useUser } from "./hooks/useUser";

function App(){
  const { user } = useUser()
  return user? <DashboardRouter/>: <AuthRouter/>
}

export default App