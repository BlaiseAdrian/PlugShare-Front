import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolutionsDetailsCard from './SolutionsDetailsCard';
import { useLocation } from 'react-router-dom';

function SolutionDetails() {

    const { state } = useLocation(); 

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

export default SolutionDetails;
