import React from 'react';
import { Link } from 'react-router-dom';

function EndorsementsCard({ name, price, location, quality, rating, contacts, details, points }) {
    return (
            <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0 w-50">{name}</h5>
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0 me-1">{points} <span className="profile-name">Points Gained</span></h5>
                        </div>
                    </div>
                    <hr />
                    <p className="card-text"><strong>Price:</strong> {price}</p>
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <p className="card-text"><strong>Quality:</strong> {quality}</p>                 
                    <div className="d-flex justify-content-between align-items-center">
                    <Link to="/EndorsementSolutionsDetails" state={{ name, price, location, quality, rating, contacts, details }} style={{ textDecoration: 'none' }}>Tap for Details</Link>
                    <button className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
    );
}

export default EndorsementsCard;
