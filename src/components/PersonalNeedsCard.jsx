import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit, faHandshake, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';


function PersonalNeedsCard({ sub_category, id, location, owner, details }) {
  
    const { solutions, removeItem } = useContext(DataContext);

    const getSolutions = (shops, need) => {
        const matchingSolutions = shops.filter(shop => shop.subcategory === need);
        return matchingSolutions.length;
    };
    
    const shopSolutions = getSolutions(solutions, sub_category);    

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
                    <button className="btn btn-primary me-3">Solutions<sup className="top-right">{shopSolutions}</sup>
                    </button>
                    </Link>
                    <button className="btn btn-secondary" onClick={() => removeItem(id)}>Remove</button>
                    </div>
                    </div>
                </div>
            </div>    
    );
}

export default PersonalNeedsCard;
