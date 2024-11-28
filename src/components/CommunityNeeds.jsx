import { useEffect, React, useRef, useState, useCallback }  from 'react';
import Filter from './Filter';
import CommunityNeedsCard from './CommunityNeedsCard';
import { useLocation } from "react-router-dom";
import SpecificFilter from './SpecificFilter';

function CommunityNeeds({needs}) {

    const location = useLocation();
    const scrollContainerRef = useRef(null);


    useEffect(() => {
      const savedScrollPosition = sessionStorage.getItem(location.pathname);
      console.log('Restoring scroll position:', savedScrollPosition);

      if (savedScrollPosition && scrollContainerRef.current) {
          setTimeout(() => {
              scrollContainerRef.current.scrollTop = parseInt(savedScrollPosition, 10);
              console.log('Applied scroll position:', scrollContainerRef.current.scrollTop);
              console.log('scrollHeight:', scrollContainerRef.current.scrollHeight);
              console.log('clientHeight:', scrollContainerRef.current.clientHeight);  
              console.log('clientHeight:', scrollContainerRef.current);
          }, 0);
      }

      return () => {
          if (scrollContainerRef.current) {
              const scrollPos = scrollContainerRef.current.scrollTop;
              console.log('Saving scroll position:', scrollPos);
              sessionStorage.setItem(location.pathname, scrollPos);
          }
      };
  }, [location]);
  
  const sortedNeeds = needs.sort((a, b) => parseInt(b.percentage) - parseInt(a.percentage));;
  

  const [items, setItems] = useState(sortedNeeds);
  const [filteredItems, setFilteredItems] = useState(items);
  const [sortParameter, setSortParameter] = useState('');

  const sortOptions = [
    { label: 'Popularity', value: 'percentage' },
    { label: 'Category', value: 'category' },
    { label: 'Location', value: 'location' },
  ];

  const handleSort = useCallback((sorted) => {
    setItems(sorted);
    setFilteredItems(sorted);
  }, []);

  const handleFilter = useCallback((filtered) => {
    setFilteredItems(filtered);
  }, []);

  return (
    <div> 
        <div className="d-flex justify-content-between align-items-center mb-3 me-3">
            <Filter         
            items={items}
        sortOptions={sortOptions}
        onSort={(sorted, selectedSortParam) => {
          handleSort(sorted);
          setSortParameter(selectedSortParam);
        }}        
        />
        <SpecificFilter
        items={items}
        sortParameter={sortParameter}
        onFilter={handleFilter}
      />
        </div>
        <div ref={scrollContainerRef} className='overflow-auto' style={{maxHeight: "75vh"}}>
            {filteredItems.map((need) => (
                <CommunityNeedsCard key={need.id} {...need} />
            ))}
        </div>
    </div>
);
}

export default CommunityNeeds;
