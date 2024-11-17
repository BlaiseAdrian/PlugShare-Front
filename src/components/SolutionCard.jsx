import React from 'react';
import { Link } from 'react-router-dom';

function SolutionCard({ name, price, location, quality, rating, contacts, details }) {
    return (
        <Link to="/SolutionsDetails" state={{ name, price, location, quality, rating, contacts, details }} style={{ textDecoration: 'none' }}>
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
                    <p className="card-text"><strong>Price:</strong> {price}</p>
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <p className="card-text"><strong>Quality:</strong> {quality}</p>
                    <a href="#" className="text-primary">Tap for Details</a>
                </div>
            </div>
        </Link>
    );
}

export default SolutionCard;
