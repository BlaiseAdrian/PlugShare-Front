import { useEffect, React, useRef, useState, useCallback, useContext } from 'react';
import Filter from './Filter';
import CommunityNeedsCard from './CommunityNeedsCard';
import { DataContext } from './DataContext';

function useScrollRestoration(ref) {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scroll-position');
    if (savedScrollPosition && ref.current) {
      ref.current.scrollTop = parseInt(savedScrollPosition, 10);
    }
    return () => {
      if (ref.current) {
        const scrollPos = ref.current.scrollTop;
        sessionStorage.setItem('scroll-position', scrollPos);
      }
    };
  }, [ref]);
}

function CommunityNeeds() {
  const { needs, subCategories, locations } = useContext(DataContext);
  const contextData = { subCategories, locations };
  const scrollContainerRef = useRef(null);

  const [filteredItems, setFilteredItems] = useState(needs);

  // Apply scroll restoration
  useScrollRestoration(scrollContainerRef);

  // Sync filteredItems with needs changes
  useEffect(() => {
    setFilteredItems(needs);
  }, [needs]);

  // Memoized filter handler
  const handleFilter = useCallback((filtered) => {
    setFilteredItems(filtered);
  }, []);

  // Memoized sort handler
  const handleSort = useCallback((sorted) => {
    setFilteredItems(sorted);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center mb-3 me-3">
        <Filter
          items={needs}
          contextData={contextData}
          sortOptions={[
            { label: 'Popularity', value: 'popularity' },
            { label: 'Subcategory', value: 'sub_category' },
            { label: 'Location', value: 'unique_locations' },
          ]}
          onSort={handleSort}
          onFilter={handleFilter}
        />
      </div>
      <div ref={scrollContainerRef} className="overflow-auto" style={{ maxHeight: '75vh' }}>
        {filteredItems.map((item, index) => (
          <CommunityNeedsCard key={index} sub_category={item} />
        ))}
      </div>
    </div>
  );
}

export default CommunityNeeds;
