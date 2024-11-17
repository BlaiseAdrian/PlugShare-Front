import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NeedsCard({ title, price, location, percentage, quality, details }) {
    const navigate = useNavigate();

    const toSolutions = () => {
        // Navigate to solutions page with state to pass data
        navigate('/Solutions');
    };

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
                    <p className="card-text"><strong>Price:</strong> {price}</p>
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <Link to="/NeedsDetails" state={{ price, location, quality, details, title }} style={{ textDecoration: 'none' }}>
                    Tap for details
                    </Link>
                    <button className="btn btn-primary" onClick={toSolutions}>Solutions</button>
                    </div>
                </div>
            </div>    
    );
}

export default NeedsCard;
