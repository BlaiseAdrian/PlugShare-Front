
import React, { useContext, useState } from 'react';
import SolutionForm from './AddSolutionCard';
import NeedForm from './AddNeedForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit, faHandshake, faHandsHelping, faLightbulb, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './DataContext';
import { useDashboard } from '../hooks/useDashboard';


function NeedsDetailsCard({ need }) { 
  console.log("need prop",need)
    const { needs, subCategories } = useContext(DataContext);
    const needData = needs.find((item) => item.id === need.id);
    console.log("need-data", needData)
    const { sub_category, location, owner, details, id } = needData;
    const [showNeedsModal, setShowNeedsModal] =useState(false);   
  const { dashboard} = useDashboard()
  const {_id} = dashboard.profile;
    const getCategoryForSubCategory = (subCategoryName) => {
        const match = subCategories.find((subCat) => subCat.name === subCategoryName);
        return match ? match.category : null; // Return the category or null if not found
    };
    
const category =  getCategoryForSubCategory(sub_category);   
    
    return (
            
            <div className="card-body">
                <div className="details mx-3 p-2 d-block bg-dark text-light">
                    {details}
                </div>
            <div className="d-flex align-items-center">           
            <div className="d-flex ps-3 mx-3 mt-1">
            <FontAwesomeIcon icon={faUser} className="fa-fw me-1 mt-1"/>
            <p style={{ color: 'blue' }}>{owner.length}</p>
            </div>    
            <FontAwesomeIcon icon={faThumbsUp} onClick={() => setShowNeedsModal(true)} className="fa-fw pe-4 mx-3 mt-1 mb-3"/>
            <NeedForm
                show={showNeedsModal}
                onClose={() => setShowNeedsModal(false)}
                sub_category = {sub_category}
                id = {id}
                c_ategory = {category}
                l_ocation = {location}
                d_etails = {details}
                userId={_id}
            />
            </div>
            </div>
    );
}

export default NeedsDetailsCard;
