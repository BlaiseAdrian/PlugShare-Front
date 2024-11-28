import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import EndorseModal from './EndorseForm';
import EndorsementSolutionsDetailsCard from './EndorsementsSolutionsDetailsCard';

function EndorsementSolutionDetails() {

    const { state } = useLocation(); 

    if (!state) {
        return <p>No details available.</p>;
    }

    return (
        <div>
            <div>
                <EndorsementSolutionsDetailsCard solution={state} />
            </div>
        </div>
    );
}

export default EndorsementSolutionDetails;
