import React, { useContext, useState } from 'react';
import NeedsCard from './PersonalNeedsCard';
import NeedForm from './AddNeedForm';
import { DataContext } from './DataContext';
import PersonalNeedsCard from './PersonalNeedsCard';
import SolutionFeedbackForm from './SolutionFeedbackForm';
import { useDashboard } from '../hooks/useDashboard';

function PersonalList() {
  const { data} = useContext(DataContext);
  console.log("data", data)
  
  const [showModal, setShowModal] =useState(false);
  const [showFeedbackModal, setShowFeedbackModal] =useState(false);

  const { dashboard } = useDashboard()
  const {_id, needs:items} = dashboard.profile;
  const n = items.length;
  

  return (
    <div> 
        <div>
          <div className="d-flex align-items-center"> 
          <button className="btn btn-primary ms-3 mb-3" onClick={() => setShowFeedbackModal(true)}>Explored Plugs</button>
           <SolutionFeedbackForm
            show={showFeedbackModal}
            onClose={() => setShowFeedbackModal(false)}
            currentUser={ 'Current User'}
            />                       
          <button className="btn btn-primary mb-3 mx-3" onClick={() => setShowModal(true)}>Add Need</button>
            <NeedForm
                show={showModal}
                onClose={() => setShowModal(false)}
                userId={_id}
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
