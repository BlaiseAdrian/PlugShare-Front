import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

export function useDashboard(){
  const { dashboard, setDashboard} = useContext(DashboardContext)
  return { dashboard, setDashboard }
}