import React from 'react';
import { Link } from 'react-router-dom';

function SolutionCard({ name, location, expectations, exceptions,  rating, flags, contacts, details, alternatives, endorsers, link, id, need }) {
    
    return (
        
            <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{name}</h5>
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-1">{rating}</h4>
                            <span className="text-warning">&#9733;</span>
                        </div>
                    </div>
                    <hr />
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <p className="card-text"><strong>Alternatives:</strong> {alternatives.length}</p>
                    <p className="card-text"><strong>Endorsers:</strong> {endorsers.length}</p>
                    <Link to={link} state={{ name, location, expectations, exceptions, alternatives, rating, flags, contacts, details, id, need}} style={{ textDecoration: 'none' }}>Tap for Details</Link>
                </div>
            </div>
        
    );
}

export default SolutionCard;
