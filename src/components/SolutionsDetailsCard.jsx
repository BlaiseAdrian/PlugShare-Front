// SolutionsDetailsCard.js

import React, { useState } from 'react';
import ReviewModal from './ReviewForm';

function SolutionsDetailsCard({ solution }) { 
    const { name, price, location, quality, rating, details, contacts } = solution;
    
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className="card detailCard mx-3" style={{minHeight: "85vh"}}>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{name}</h5>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>Submit Review</button>
                    <ReviewModal
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        shopName="Sula's Shop"
                    />
                </div>
                <hr />
                <p className="card-text"><strong>Rating:</strong> {rating}</p>
                <p className="card-text"><strong>Price:</strong> {price}</p>
                <p className="card-text"><strong>Location:</strong> {location}</p>
                <p className="card-text"><strong>Quality:</strong> {quality}</p>
                <p className="card-text"><strong>Contact Details:</strong> {contacts}</p>
                <p className="card-text"><strong>Details:</strong></p>
                <div className="details m-2 p-2 d-block bg-dark text-light">
                    {details}
                </div>
            </div>
        </div>
    );
}

export default SolutionsDetailsCard;
