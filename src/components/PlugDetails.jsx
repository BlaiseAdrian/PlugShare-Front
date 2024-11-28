import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolutionsDetailsCard from './SolutionsDetailsCard';
import { Link, useLocation } from 'react-router-dom';
import AlternativesModal from './AlternativesForm';
import EndorseModal from './EndorseForm';

function PlugDetails() {

    const { state } = useLocation(); 
    const [showAlternativesModal, setShowAlternativesModal] =useState(false);
    const [showEndorseModal, setShowEndorseModal] =useState(false);

    if (!state) {
        return <p>No details available.</p>;
    }

    return (
        <div>
            <div>
                <SolutionsDetailsCard solution={state} />
            </div>
        </div>
    );
}

export default PlugDetails;
