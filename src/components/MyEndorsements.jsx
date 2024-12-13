import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EndorsementsCard from './MyEndorsementsCard';
import Filter from './Filter';

function MyEndorsements() {
    if (true) {
        return <p className='ms-4'>No details available for now.</p>;
      }

    const [items, setItems] = useState(endorsements);
  
    const sortOptions = [
      { label: 'Points Gained', value: 'points' },
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
            <div className='overflow-auto' style={{maxHeight: "75vh"}}>
                {endorsements.map((shop, index) => (
                    <EndorsementsCard key={index} {...shop} />
                ))}
            </div>
        </div>
    );
}

export default MyEndorsements;
