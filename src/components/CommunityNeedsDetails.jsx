import React, { useCallback, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NeedsDetailsCard from './NeedsDetailsCard';
import SolutionForm from './AddSolutionCard';
import { Link, useLocation} from 'react-router-dom';
import { DataContext } from './DataContext';
import Filter from './Filter';

function CommunityNeedsDetails() {
  const location = useLocation(); // Use the hook to get the state
  const { state } = location; // Extract state from location
  const {subCategory}  = state;
   
    const [showSolutionModal, setShowSolutionModal] =useState(false);
    
  const { data, needs, solutions, updateCurrentSub } = useContext(DataContext);
  
  const subCategoryData = needs.find((subCat) => subCat.sub_category === subCategory.sub_category);


  updateCurrentSub(subCategory.sub_category);

  const getSolutions = (shops, need) => {
    const matchingSolutions = shops.filter(shop => shop.subcategory === need);
    return matchingSolutions.length;
};

const shopSolutions = getSolutions(solutions, subCategoryData.sub_category); 

  function getSortedLocationsForSubcategory(subCategoryData) {
      
    if (!subCategoryData) return []; // Return empty array if subcategory is not found
  
    // Count occurrences of each location
    const locationCounts = {};
    subCategoryData.items.forEach((item) => {
      locationCounts[item.location] = (locationCounts[item.location] || 0) + 1;
    });
    
  
    // Sort locations by their counts (descending) and return the sorted locations
    return Object.entries(locationCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
      .map(([location]) => location); // Extract the location names
  }
  

  const sortedLocations = getSortedLocationsForSubcategory(subCategoryData);

    const groupAndSortNeeds = (needs) => {
        // Group by need
        const grouped = needs.reduce((acc, need) => {
          if (!acc[need.location]) {
            acc[need.location] = [];
          }
          acc[need.location].push(need);
          return acc;
        }, {});
      
        // Sort within each group by rating in descending order
        for (const need in grouped) {
          grouped[need].sort((a, b) => b.count - a.count);
        }
      
        return grouped;
      };
      
      const groupedNeeds = groupAndSortNeeds(data); 

// Step 1: Count the frequency of each location
const locationFrequency = subCategoryData.items.reduce((freq, item) => {
  freq[item.location] = (freq[item.location] || 0) + 1;
  return freq;
}, {});

// Step 2: Sort the array based on the frequency of the location
const sortedItems = subCategoryData.items.sort((a, b) => {
  const freqA = locationFrequency[a.location];
  const freqB = locationFrequency[b.location];
  
  // Higher frequency comes first
  if (freqA !== freqB) return freqB - freqA;

  // Optionally, sort alphabetically by location if frequencies are equal
  return a.location.localeCompare(b.location);
});       
      const [items, setItems] = useState(sortedItems);

        // Update items whenever data changes
  useEffect(() => {
    setItems(subCategoryData.items);
  }, [subCategoryData]); // Recompute items whenever data changes

    return (     
        <div>      
            <h4 className='ms-3 mb-4'>{subCategoryData.sub_category}</h4>
            <div className="d-flex justify-content-between mb-2">          
            <button className="btn btn-primary ms-3 mb-1" onClick={() => setShowSolutionModal(true)}>Suggest a Plug</button>
            <SolutionForm
            show={showSolutionModal}
            onClose={() => setShowSolutionModal(false)}
            address = {state.location}
            title = {subCategoryData.sub_category}
            currentUser={ 'Current User'}
            />
                                <Link to="/Solutions" state = {subCategoryData}>
                    <button className="btn btn-primary me-3"> Shared Plugs<sup class="top-right">{shopSolutions}</sup>
                    </button>
                    </Link>
            </div>       
            <div>
            <hr className='mx-3'/>
            <h4 className='ms-2 mb-2' style={{ fontWeight: 'bold' }}>What people want;</h4>
                <div className="d-flex justify-content-between align-items-center">
                </div>
                <div className='overflow-auto' style={{ maxHeight: "55vh" }}>
  {items.map((need, idx) => {
    // Display the location if it's the first item or if the location differs from the previous one
    const showLocation =
      idx === 0 || need.location !== items[idx - 1].location;

    return (
      <div key={idx}>
        {showLocation && <h5 className="ms-3">In {need.location};</h5>}
        <NeedsDetailsCard need={need} />
      </div>
    );
  })}
</div>
            </div>
        </div>
    );
}

export default CommunityNeedsDetails;
