import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import SolutionCard from './SolutionCard';

function Plugs({shops}) {
// Sort and group the solutions
const groupAndSortShops = (shops) => {
    // Group by need
    const grouped = shops.reduce((acc, shop) => {
      if (!acc[shop.need]) {
        acc[shop.need] = [];
      }
      acc[shop.need].push(shop);
      return acc;
    }, {});
  
    // Sort within each group by rating in descending order
    for (const need in grouped) {
      grouped[need].sort((a, b) => b.rating - a.rating);
    }
  
    return grouped;
  };
  
  const groupedShops = groupAndSortShops(shops);

  // Get the top solution for every need group
    const topSolutions = Object.entries(groupedShops).reduce((acc, [need, shops]) => {
    //acc[need] = shops[0]; // The first item is the top solution (highest rated)
    // Get the top 3 solutions (or fewer if there are not enough)
    acc[need] = shops.slice(0, 3);
    return acc;
  }, {});

    const [items, setItems] = useState(Object.entries(topSolutions));
  
    const sortOptions = [
      { label: 'Endosements', value: 'endosements' },
      { label: 'Ratings', value: 'ratings' },
    ];
  
    const handleSort = useCallback((sortedItems) => {
      setItems(sortedItems);
    }, []);

    return (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Filter          
            items={items}
        sortOptions={sortOptions}
        onSort={handleSort}/>
          </div>
      
          <div className='overflow-auto' style={{ maxHeight: "75vh" }}>
            {Object.entries(topSolutions).map(([need, shops], index) => (
              <div key={index}>
                {/* Display the need name */}
                <h4 className="ms-3" >{need}</h4>
                
                {/* Display the top 3 solutions for the current need */}
                {shops.map((shop, idx) => (
                  <SolutionCard link="/PlugDetails" key={idx} {...shop} />
                ))}
      
                {/* Horizontal line after each list */}
                <hr className="section-divider mx-3 mb-3" />
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default Plugs;
