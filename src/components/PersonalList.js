import React, { useState } from 'react';
import NeedsCard from './NeedsCard';
import NeedForm from './AddNeedForm';

function PersonalList() {
  const items = [
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
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxr"
    },
    {
      title: "Quality Kitchenware",
      price: "5% below Market prices",
      location: "Local stores in Kampala",
      percentage: "!",
      quality: "Medium",
      details: "sdrcgbhjmkjnhbfdfvbhijonibfcdxrtgbjomkjigvydxr"
    },
    // Add more items as needed
  ];

  const [showModal, setShowModal] =useState(false);

  return (
    <div> 
        <div>
            <button className="btn btn-primary mb-3 ms-3" onClick={() => setShowModal(true)}>Add Need</button>
            <NeedForm
                show={showModal}
                onClose={() => setShowModal(false)}
            />
            {items.map((item, index) => (
                <NeedsCard key={index} {...item} />
            ))}
        </div>
    </div>
);
}

export default PersonalList;
