import React from 'react';
import { Link } from 'react-router-dom';

function EndorsersCard({ name, points, endorsements, redFlags, position }) {
    return (
            <div className="card mb-3 mx-3">
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-center ms-3">
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-3">{position}. {name}</h4>
                        </div>
                        <img src="https://via.placeholder.com/50" alt="Profile" className="pic rounded-circle mx-3" />                           
                        
                    </div>
                    <hr />
                    <div className="card-info">
                        <p className="card-text"><strong>Total Points:</strong> {points}</p>
                        <p className="card-text"><strong>Total Endorsements:</strong> {endorsements}</p>
                        <p className="card-text"><strong>Red Flags:</strong> {redFlags}</p>
                    </div>
                </div>
            </div>
    );
}

export default EndorsersCard;
