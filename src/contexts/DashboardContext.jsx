import { createContext, useState } from 'react';

export const DashboardContext = createContext()

export function DashboardProvider({children}){
  const [dashboard, setDashboard] = useState(null)
  return(
    <DashboardContext.Provider value = {{dashboard, setDashboard}} >
      { children }
    </DashboardContext.Provider>
  )
}