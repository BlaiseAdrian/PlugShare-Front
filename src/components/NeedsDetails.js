import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NeedsDetailsCard from './NeedsDetailsCard';
import SolutionForm from './AddSolutionCard';
import { useLocation} from 'react-router-dom';

function NeedsDetails() {

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
            <NeedsDetailsCard need={state} />
            </div>
        </div>
    );
}

export default NeedsDetails;
