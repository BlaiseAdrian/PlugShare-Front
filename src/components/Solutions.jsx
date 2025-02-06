import React, { useCallback, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';
import { useDashboard } from '../hooks/useDashboard';
import { DashboardContext } from '../contexts/DashboardContext';

function Solutions() {
    const { state } = useLocation();
    const { dashboard, setDashboard } = useDashboard();
    const { updateCurrentNeed, currentNeed} = useContext(DashboardContext);
    
    if(state) {
      updateCurrentNeed(state);
  } 

    const shops = dashboard.solutions.all_solutions.filter((solution) => solution.need_id === currentNeed);
    //console.log(state)
    const [items, setItems] = useState(shops);
  
    const sortOptions = [
      { label: 'Endosements', value: 'endosements' },
      { label: 'Ratings', value: 'ratings' },
    ];
  
    const handleSort = useCallback((sortedItems) => {
      setItems(sortedItems);
    }, []);

    return (
        <div>
            <h4 className='ms-3 mb-4'>Shared Plugs:</h4>
            <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <div className='overflow-auto' style={{ maxHeight: "75vh" }}>
                {items.map((shop) => (
                  <SolutionCard link="/SolutionsDetails" key={shop.need_id} shop={shop}/>
                ))}
            </div>
        </div>
    );

}

export default Solutions;
