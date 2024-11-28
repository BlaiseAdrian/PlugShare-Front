import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EndorsementsCard from './MyEndorsementsCard';
import Filter from './Filter';

function MyEndorsements() {
    const endorsements = [
        { name: "Tendo’s SuperMarket", price: "15% below Market prices", location: "Kikuubo", quality: "Medium", rating: 3.5, points: 24, contacts: "12345673456", details: "ertyuijoubyvcdxrrtcyubiouibyvcdxtvyubinonbuvcfdfygbinoinibugydfgvubhionibugyfgvubhinonibgfghghbinojbhgfg ghbinobhgfgghhbj" },      
    ];

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
