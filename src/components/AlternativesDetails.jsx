import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolutionsDetailsCard from './SolutionsDetailsCard';
import { Link, useLocation } from 'react-router-dom';
import EndorseModal from './EndorseForm';

function AlternativesDetails() {

    const { state } = useLocation(); 
    const [showEndorseModal, setShowEndorseModal] =useState(false);

    if (!state) {
        return <p>No details available.</p>;
    }

    return (
        <div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary ms-3 mb-3" onClick={() => setShowEndorseModal(true)}>Endorse</button>
            <EndorseModal
                show={showEndorseModal}
                onClose={() => setShowEndorseModal(false)}
                shopName="Sula's Shop"
            />
        </div>
            <div>
                <SolutionsDetailsCard main={''} solution={state} />
            </div>
        </div>
    );
}

export default AlternativesDetails;
