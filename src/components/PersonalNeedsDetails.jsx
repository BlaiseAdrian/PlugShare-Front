import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NeedsDetailsCard from './NeedsDetailsCard';
import SolutionForm from './AddSolutionCard';
import { useLocation} from 'react-router-dom';

function PersonalNeedsDetails() {

    const { state } = useLocation(); 
    const [showModal, setShowModal] =useState(false);

    if (!state) {
        return <p>No details available.</p>;
    }

    return (     
        <div>           
            <button className="btn btn-primary ms-3 mb-3" onClick={() => setShowModal(true)}>Add Solution</button>
                    <SolutionForm
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        address = {state.location}
                    />
            <div>
            <p className="card-text"><strong>Details:</strong></p>
                <div className="details m-2 p-2 d-block bg-dark text-light">
                    {state.details}
                </div>
            </div>
        </div>
    );
}

export default PersonalNeedsDetails;
