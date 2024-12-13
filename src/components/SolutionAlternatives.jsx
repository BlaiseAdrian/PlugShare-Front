import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';

import { useLocation } from 'react-router-dom';

function SolutionAlternatives() {
  const location = useLocation(); // Use the hook to get the state
  const { state } = location; // Extract state from location

  // Ensure the state exists
  if (!state) {
    return <p>No details available for now.</p>;
  }

  const { name, alternatives } = state; // Destructure title and alternatives from state

  const [sortedAlternatives, setSortedAlternatives] = useState(alternatives);
  
  const sortOptions = [
    { label: 'Endosements', value: 'endosements' },
    { label: 'Ratings', value: 'ratings' },
  ];

  const handleSort = useCallback((sortedItems) => {
    setSortedAlternatives(sortedItems);
  }, []);

  return (
    <div>
      <h4 className="ms-3 mb-4"> {name} Alternatives:</h4>
      <div className="d-flex justify-content-between align-items-center mb-3">
      <Filter          
        items={sortedAlternatives}
        sortOptions={sortOptions}
        onSort={handleSort}/>
      </div>
      <div className="overflow-auto" style={{ maxHeight: "75vh" }}>
        {sortedAlternatives.map((shop, index) => (
          <SolutionCard link="/AlternativesDetails" key={index} {...shop} />
        ))}
      </div>
    </div>
  );
}

export default SolutionAlternatives;

