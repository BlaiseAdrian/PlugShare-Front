import { useContext } from "react";
import { DataContext } from "../components/DataContext";

export function useData(){
  const { setNeeds, setSolutions} = useContext(DataContext)
  return { setNeeds, setSolutions }
}