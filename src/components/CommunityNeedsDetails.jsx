import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NeedsDetailsCard from './NeedsDetailsCard';
import SolutionForm from './AddSolutionCard';
import { useLocation} from 'react-router-dom';
import NeedForm from './AddNeedForm';

function CommunityNeedsDetails() {

    const { state } = useLocation(); 
    const [showSolutionModal, setShowSolutionModal] =useState(false);
    const [showNeedsModal, setShowNeedsModal] =useState(false);

    if (!state) {
        return <p>No details available.</p>;
    }

    return (     
        <div>    
            <div className="d-flex justify-content-between">
            <button className="btn btn-primary ms-3 mb-3" onClick={() => setShowSolutionModal(true)}>Add Solution</button>
            <SolutionForm
            show={showSolutionModal}
            onClose={() => setShowSolutionModal(false)}
            address = {state.location}
            title = {state.title}
            />

            <button className="btn btn-primary mb-3 me-3" onClick={() => setShowNeedsModal(true)}>Add to Personal List</button>
            <NeedForm
                show={showNeedsModal}
                onClose={() => setShowNeedsModal(false)}
                t_itle = {state.title}
                c_ategory = {state.category}
                l_ocation = {state.location}
                p_urpose = {state.purpose}
                d_etails = {state.details}
            />
            </div>       
            <div>
            <NeedsDetailsCard need={state} />
            </div>
        </div>
    );
}

export default CommunityNeedsDetails;
