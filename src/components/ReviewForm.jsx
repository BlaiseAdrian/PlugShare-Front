import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReviewModal({ show, onClose, shopName }) {
    const [isFlagged, setIsFlagged] = useState(false);
    const [selectedStars, setSelectedStars] = useState([]);

    const handleFlagClick = () => {
        setIsFlagged(!isFlagged);
        if (!isFlagged) {
            setSelectedStars([]); // Reset stars if flag is selected
        }
    };

    const handleStarClick = (index) => {
        if (isFlagged) return;

        setSelectedStars((prev) => {
            // If the star is already selected, remove it and any subsequent stars
            if (prev.includes(index)) {
                return prev.filter((star) => star < index);
            } else {
                // Only allow selection if the previous star is selected or it's the first star
                if (index === 0 || prev.includes(index - 1)) {
                    return [...prev, index];
                }
            }
            return prev;
        });
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{shopName}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Tap the flag or star if the Statement is correct.</p>
                        
                        <div className="mb-2" onClick={handleFlagClick} style={{ cursor: 'pointer' }}>
                            <span
                                className={`me-2 ${isFlagged ? 'text-danger' : 'text-muted'}`}
                                role="img"
                                aria-label="flag"
                                style={{ fontSize: '1.5rem' }}
                            >
                                &#9873; {/* Flag icon */}
                            </span>
                            The Information about the place is misleading. It is a scam.
                        </div>

                        {[
                            "The information presented is accurate.",
                            "My needs were met.",
                            "Customer Service is Good.",
                            "This meets the purposes, and more",
                            "The service is Excellent",
                        ].map((statement, index) => (
                            <div
                                key={index}
                                onClick={() => handleStarClick(index)}
                                style={{ cursor: isFlagged ? 'not-allowed' : 'pointer' }}
                                className="d-flex align-items-center mb-2"
                            >
                                <span
                                    className={`me-2 ${selectedStars.includes(index) ? 'text-warning' : 'text-muted'}`}
                                    role="img"
                                    aria-label="star"
                                    style={{ fontSize: '1.5rem' }}
                                >
                                    &#9733; {/* Star icon */}
                                </span>
                                {statement}
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Discard</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;
