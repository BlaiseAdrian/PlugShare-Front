import { useContext } from "react";
import { DataContext } from "../components/DataContext";

export function useDashboard(){
  const { data, solutions, addItem, removeItem, addSolution } = useContext(DataContext)
  return { data, solutions, addItem, removeItem, addSolution }
}