import React, { useCallback, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';

function Solutions() {

    const { state } = useLocation();
    const { solutions, currentSoln, updateCurrentSub, currentSub} = useContext(DataContext);

    if(state) {
        updateCurrentSub(state.sub_category);
    }    
    const title = state? state.sub_category : currentSub;

    // Sort and group the solutions
const groupAndSortShops = (solutions) => {
    // Group by need
    const shops = solutions.filter((solution) => solution.subcategory === currentSub);
  
    // Sort within each group by rating in descending order
    const sortedShops = shops.sort((a, b) => a.rating - b.rating);
  
    return sortedShops;
  };

  const business = groupAndSortShops(solutions);

    const [items, setItems] = useState(business);

    
  useEffect(() => {
    const business = groupAndSortShops(solutions);
    setItems(business);
  }, [solutions, currentSoln]); // Recompute shop whenever data changes
  
    const sortOptions = [
      { label: 'Endosements', value: 'endosements' },
      { label: 'Ratings', value: 'ratings' },
    ];
  
    const handleSort = useCallback((sortedItems) => {
      setItems(sortedItems);
    }, []);

    return (
        <div>
            <h4 className='ms-3 mb-4'>{title} Plugs:</h4>
            <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <div className='overflow-auto' style={{ maxHeight: "75vh" }}>
                {items.map((shop) => (
                    shop.subcategory === title && (
                        <SolutionCard link="/SolutionsDetails" key={shop.id} shop={shop}/>
                    )
                ))}
            </div>
        </div>
    );

}

export default Solutions;
