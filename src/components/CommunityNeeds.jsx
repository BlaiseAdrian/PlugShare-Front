import React from 'react';
import NeedsCard from './NeedsCard';
import Filter from './Filter';

function CommunityNeeds() {
  const items = [   
    {
        title: "Quality Kitchenware",
        price: "5% below Market prices",
        location: "Local stores in Kampala",
        percentage: "30%",
        quality: "Medium",
        details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxr"
      },
    {
      title: "Cheap Household Items",
      price: "10% below Market prices",
      location: "Anywhere around Kampala",
      percentage: "20%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxr"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    {
      title: "Affordable Electronics",
      price: "15% below Market prices",
      location: "Central Market, Kampala",
      percentage: "60%",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxrszdxfcgvhbjnbhvcgfxdzxfcgvbjkbhvcgfxdcghvjbknbjhgcfxdgchvjbkbhvcgfxdgchvjb"
    },
    // Add more items as needed
  ];

  const plugFilter = {property: "Sort By", value: "Price"};

  return (
    <div> 
        <div className="d-flex justify-content-between align-items-center mb-3">
            <Filter filter = {plugFilter}/>
        </div>
        <div className='overflow-auto' style={{maxHeight: "75vh"}}>
            {items.map((item, index) => (
                <NeedsCard key={index} {...item} />
            ))}
        </div>
    </div>
);
}

export default CommunityNeeds;
