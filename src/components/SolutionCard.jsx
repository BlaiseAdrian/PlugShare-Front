import React from 'react';
import { Link } from 'react-router-dom';

function SolutionCard({ shop, link }) {
    
    return (
        
            <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{shop.name}</h5>
                    </div>
                    <hr />
                    <p className="card-text"><strong>Locations:</strong> {Array.isArray(shop.location) ? shop.location.join(', ') : shop.location}</p>
                    <p className="card-text"><strong>Alternatives:</strong> {shop.alternatives.length}</p>
                    <p className="card-text"><strong>Endorsements:</strong> {shop.endorsers.length}</p>
                    <Link to={link} state={shop} style={{ textDecoration: 'none' }}>Tap for Details</Link>
                </div>
            </div>
        
    );
}

export default SolutionCard;
