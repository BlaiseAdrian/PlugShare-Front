import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./DataContext";
import Filter from './Filter';
import CommunityNeedsCard from './CommunityNeedsCard';
import SolutionFeedbackForm from './SolutionFeedbackForm';

function useScrollRestoration(ref) {
  useEffect(() => {
    // Restore scroll position
    const savedScrollPosition = sessionStorage.getItem('scroll-position');
    if (savedScrollPosition && ref.current) {
      ref.current.scrollTop = parseInt(savedScrollPosition, 10);
    }

    const handleScroll = () => {
      if (ref.current) {
        const scrollPos = ref.current.scrollTop;
        sessionStorage.setItem('scroll-position', scrollPos);
      }
    };

    // Add scroll event listener
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);
}



function CommunityNeeds() {
  const { needs, subCategories, locations } = useContext(DataContext);
  const contextData = { subCategories, locations };
  const scrollContainerRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState(needs);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  useScrollRestoration(scrollContainerRef, filteredItems);

  useEffect(() => {
    setFilteredItems((prevItems) => (prevItems !== needs ? needs : prevItems));
  }, [needs]);

  const handleFilter = useCallback((filtered) => {
    setFilteredItems(filtered);
  }, []);

  const handleSort = useCallback((sorted) => {
    setFilteredItems(sorted);
  }, []);

  useEffect(() => {
    const lastShown = localStorage.getItem("lastFeedbackShown");
    const now = Date.now();
  
    // Debugging logs
    console.log("Last shown timestamp:", lastShown);
    console.log("Current timestamp:", now);
    console.log("Difference in milliseconds:", lastShown ? now - parseInt(lastShown, 10) : "No previous timestamp");
  
    // Show feedback form if not shown before or after 24 hours
    if (!lastShown || now - parseInt(lastShown, 10) >= 1000) {
      setShowFeedbackModal(true);
      localStorage.setItem("lastFeedbackShown", now); // Store the current timestamp
      console.log("Feedback form triggered, timestamp updated.");
    } else {
      console.log("Feedback form not shown, within 24-hour window.");
    }
  }, []);  


  return (
    <div>
      <div className="d-flex justify-content-around align-items-center mb-3 me-3">
        <SolutionFeedbackForm
          show={showFeedbackModal}
          onClose={() => setShowFeedbackModal(false)}
          currentUser={'Current User'}
        />
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
      <div ref={scrollContainerRef} key="scroll-container" className="overflow-auto" style={{ maxHeight: '75vh' }}>
        {filteredItems.map((item, index) => (
          <CommunityNeedsCard key={index} sub_category={item} />
        ))}
      </div>
    </div>
  );
}


export default CommunityNeeds;