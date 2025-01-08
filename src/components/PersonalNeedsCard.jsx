import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit, faHandshake, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import NeedForm from './AddNeedForm';


function PersonalNeedsCard({ sub_category, id, location, owner, details }) {
  
    const { solutions, removeItem, subCategories } = useContext(DataContext);

    const getSolutions = (shops, need) => {
        const matchingSolutions = shops.filter(shop => shop.subcategory === need);
        return matchingSolutions.length;
    };
    
    const shopSolutions = getSolutions(solutions, sub_category);  
    const [showNeedsModal, setShowNeedsModal] =useState(false); 
    const getCategoryForSubCategory = (subCategoryName) => {
        const match = subCategories.find((subCat) => subCat.name === subCategoryName);
        return match ? match.category : null; // Return the category or null if not found
    };
    
const category =  getCategoryForSubCategory(sub_category); 

    return (
         <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{sub_category}</h5>
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-1">{owner.length}<FontAwesomeIcon icon={faUser} className="fa-fw mx-1"/></h4>
                        </div>
                    </div>
                    <hr />
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <div className="details m-2 p-2 bg-dark text-light">
                        {details}
                    </div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                    <Link to="/Solutions"  state={{ location, details, sub_category }}>
                    <button className="btn btn-primary me-3">Plugs<sup className="top-right">{shopSolutions}</sup>
                    </button>
                    </Link>
                    <button className="btn btn-secondary me-3" onClick={() => removeItem(id)}>Remove</button>
                    <button className="btn btn-primary" onClick={() => setShowNeedsModal(true)}> Edit</button>
                    <NeedForm
                        show={showNeedsModal}
                        onClose={() => setShowNeedsModal(false)}
                        sub_category = {sub_category}
                        id = {id}
                        c_ategory = {category}
                        l_ocation = {location}
                        d_etails = {details}
                        edit = {'edit'}
                    />
                    </div>
                    </div>
                </div>
            </div>    
    );
}

export default PersonalNeedsCard;
