import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function CommunityNeedsCard({ title, location, percentage, purpose, details }) {
  
    const { solutions } = useContext(DataContext);

    const getSolutions = (shops, need) => {
        const matchingSolutions = shops.filter(shop => shop.need === need);
        return matchingSolutions.length;
    };
    
    const shopSolutions = getSolutions(solutions, title); 

    return (
         <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{title}</h5>
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-1">{percentage}</h4>
                        </div>
                    </div>
                    <hr />
                    <p className="card-text"><strong>Purpose:</strong> {purpose}</p>
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <Link to="/CommunityNeedsDetails" state={{ location, purpose, details, title }} style={{ textDecoration: 'none' }}>
                    Tap for details
                    </Link>
                    <Link to="/Solutions"  state={{ location, purpose, details, title }}>
                    <button className="btn btn-primary">Solutions<sup class="top-right">{shopSolutions}</sup>
                    </button>
                    </Link>
                    </div>
                </div>
            </div>    
    );
}

export default CommunityNeedsCard;
