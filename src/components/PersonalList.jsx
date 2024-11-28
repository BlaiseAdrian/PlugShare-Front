import React, { useContext, useState } from 'react';
import NeedsCard from './PersonalNeedsCard';
import NeedForm from './AddNeedForm';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';
import PersonalNeedsCard from './PersonalNeedsCard';

function PersonalList() {
  const { data} = useContext(DataContext);
  
  const items = data.filter((need) => need.owner.includes("Mark"));
  const [showModal, setShowModal] =useState(false);
  const n = items.length;

  return (
    <div> 
        <div>
          <div className="d-flex align-items-center">           
          <button className="btn btn-primary mb-3 mx-3" onClick={() => setShowModal(true)}>Add Need</button>
            <NeedForm
                show={showModal}
                onClose={() => setShowModal(false)}
            />
            <h2 className="mb-3 mx-3">{n}/3</h2>
          </div>
            {items.map((item, index) => (
                <PersonalNeedsCard key={index} {...item} />
            ))}
        </div>
    </div>
);
}

export default PersonalList;
