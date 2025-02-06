
import React, { useContext, useState } from 'react';
import SolutionForm from './AddSolutionCard';
import NeedForm from './AddNeedForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit, faHandshake, faHandsHelping, faLightbulb, faThumbsUp, faLocationPin, faPlug, faPlugCircleBolt, faPlugCircleCheck, faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './DataContext';
import { useUser } from '../hooks/useUser';
import { useDashboard } from '../hooks/useDashboard';
import { Link, useLocation } from 'react-router-dom';
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation';


function NeedsDetailsCard({ need }) { 
    
    const { need_sub_category, sub_category_id, need_solutions, location, purpose, need_id, need_category } = need;
    const [showNeedsModal, setShowNeedsModal] =useState(false);   
    const [showSolutionModal, setShowSolutionModal] =useState(false);
  const {setUser} = useUser()
  const { dashboard, setDashboard } = useDashboard()
  const {_id} = dashboard.profile;
  
  /*const location = useLocation(); // Use the hook to get the state
  const { state } = location; // Extract state from location
  const {subCategory}  = state;
   
    const [showSolutionModal, setShowSolutionModal] =useState(false);
    */
   
    
    return (
            
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex">
                        <p className="mx-3">Location: <span style={{ color: 'blue' }}>{location}</span></p>
                        <div className="d-flex ps-3">
                            <p className="mx-1">In: </p>
                            <p style={{ color: 'blue' }}>{ need_sub_category}</p>
                        </div>
                    </div>
                </div>
                <div className="details mx-3 p-2 d-block bg-dark text-light">
                    {purpose}
                </div>
            <div className="d-flex  justify-content-between mb-2" >
                <div className="d-flex">
                    <div className="ms-3 ps-2 mt-1">
                        <FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faThumbsUp} onClick={() => setShowNeedsModal(true)} className="fa-fw pe-1"/>
                        <NeedForm
                            show={showNeedsModal}
                            onClose={() => setShowNeedsModal(false)}
                            sub_category = {need_sub_category}
                            id = {need_id}
                            c_ategory = {need_category}
                            l_ocation = {location}
                            d_etails = {purpose}
                            userId={_id}
                        />
                    </div>
                    <div className="ms-3 ps-2 mt-1">
                        <FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faPlugCirclePlus} onClick={() => setShowSolutionModal(true)} className="fa-fw pe-1"/>
                        <SolutionForm
                        show={showSolutionModal}
                        onClose={() => setShowSolutionModal(false)}
                        address = {location}
                        need_id = {need_id}
                        sub_category_id = {sub_category_id}
                        />
                    </div>

                </div>
                
                <div className="d-flex  pe-3 me-3 mt-1">                                
                    <Link to="/Solutions" state = {need_id}>
                        <FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faPlug} className="fa-fw mt-1"/>
                        
                    </Link>
                    <p style={{ color: 'blue' }}>{need_solutions.length}</p>
                </div>
            </div>
            </div>
    );
}

export default NeedsDetailsCard;
