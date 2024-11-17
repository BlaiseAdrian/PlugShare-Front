
import React, { useState } from 'react';
import SolutionForm from './AddSolutionCard';

function NeedsDetailsCard({ need }) { 
    const { title, price, location, quality, details } = need;
    
    return (
        <div className="card detailCard mx-3" style={{minHeight: "75vh"}}>
            
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mw-30">
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                </div>
                <hr />
                <p className="card-text"><strong>Price:</strong> {price}</p>
                <p className="card-text"><strong>Location:</strong> {location}</p>
                <p className="card-text"><strong>Quality:</strong> {quality}</p>
                <p className="card-text"><strong>Details:</strong></p>
                <div className="details m-2 p-2 d-block bg-dark text-light">
                    {details}
                </div>
            </div>
        </div>
    );
}

export default NeedsDetailsCard;
