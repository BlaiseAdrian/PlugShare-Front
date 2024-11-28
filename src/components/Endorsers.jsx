import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EndorsersCard from './EndorsersCard';

function Endorsers() {
    const endorsers = [
        { name: "Blaise", points: 60, endorsements: 7, redFlags: 0, position: 1 },
        { name: "Angel", points: 58, endorsements: 7, redFlags: 0, position: 2 },
        { name: "Ben", points: 50, endorsements: 4, redFlags: 0, position: 3 },
        { name: "Bill", points: 46, endorsements: 8, redFlags: 0, position: 4 },
        { name: "Joy", points: 39, endorsements: 8, redFlags: 7, position: 5 },
        { name: "Tom", points: 23, endorsements: 12, redFlags: 0, position: 6 },
            
    ];

    const plugFilter = {property: "Sort By", value: "Price"};

    return (
        <div> 
            <div className='overflow-auto' style={{maxHeight: "75vh"}}>
                {endorsers.map((shop, index) => (
                    <EndorsersCard key={index} {...shop} />
                ))}
            </div>
        </div>
    );
}

export default Endorsers;
