import { createContext, useState } from 'react';

export const DashboardContext = createContext()

export function DashboardProvider({children}){
  const [dashboard, setDashboard] = useState(null)
  const [currentNeed, setCurrentNeed] = useState();

  const updateCurrentNeed = (need) => {
    setCurrentNeed(need); 
  };

  return(
    <DashboardContext.Provider value = {{dashboard, currentNeed, setDashboard, updateCurrentNeed}} >
      { children }
    </DashboardContext.Provider>
  )
}