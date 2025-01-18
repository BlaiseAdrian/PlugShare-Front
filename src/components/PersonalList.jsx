import React, { useContext, useState } from 'react';
import NeedsCard from './PersonalNeedsCard';
import NeedForm from './AddNeedForm';
import { useLocation } from 'react-router-dom';
import { DataContext } from './DataContext';
import PersonalNeedsCard from './PersonalNeedsCard';
import SolutionFeedbackForm from './SolutionFeedbackForm';
import { useUser } from '../hooks/useUser';
import { useDashboard } from '../hooks/useDashboard';

function PersonalList() {
  const { data} = useContext(DataContext);
  
  const items = data.filter((need) => need.owner.includes("Current User"));
  const [showModal, setShowModal] =useState(false);
  const [showFeedbackModal, setShowFeedbackModal] =useState(false);
  const n = items.length;
  const {setUser} = useUser()
  const { dashboard, setDashboard } = useDashboard()
  const {_id} = dashboard.profile;

  function signout(){
    setUser(null)
    setDashboard(null)
    localStorage.removeItem("user")
    localStorage.removeItem("jwt")
  }

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
