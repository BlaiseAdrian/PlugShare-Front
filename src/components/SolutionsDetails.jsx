import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolutionsDetailsCard from './SolutionsDetailsCard';
import { Link, useLocation } from 'react-router-dom';
import AlternativesModal from './AlternativesForm';
import EndorseModal from './EndorseForm';

function SolutionDetails() {
    const { state } = useLocation(); 
    const [showAlternativesModal, setShowAlternativesModal] =useState(false);
    const [showEndorseModal, setShowEndorseModal] =useState(false);

    if (!state) {
        return <p>No details available.</p>;
    }
    
    return (
        <div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary mb-3 ms-3" disabled={state} onClick={() => setShowEndorseModal(true)}>Endorse</button>
            <EndorseModal
                show={showEndorseModal}
                onClose={() => setShowEndorseModal(false)}
                shopName="Sula's Shop"
            />
            <button className="btn btn-primary mb-3 me-3" disabled={state} onClick={() => setShowAlternativesModal(true)}>Suggest Alternative</button>
            <AlternativesModal
                show={showAlternativesModal}
                onClose={() => setShowAlternativesModal(false)}
                shopName="Sula's Shop"
            />
        </div>
            <div>
                <SolutionsDetailsCard main={'main'} solution={state}/>
            </div>
        </div>
    );
}

export default SolutionDetails;
