import React from 'react';

function Filter({filter}) {
    const {property, value} = filter;
    return (
        <div className="d-flex justify-content-around mb-3 px-3">
            <div>
                <span className="fw-bold me-2">{property}:</span>
                <select className="">
                                    <option value="">Select Quality</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Premium">Premium</option>
                                </select>
            </div>
        </div>
    );
}

export default Filter;
