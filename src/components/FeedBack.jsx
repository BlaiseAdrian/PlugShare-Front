import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeedBackForm({ show, onClose, currentUser }) {
    const [feedback, setFeedback] = useState('');

    const { addFeedback } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            id: Date.now(),
            name: currentUser,
            feedback: feedback,
        };

        addFeedback(newFeedback); 
        setFeedback('');
        onClose(); // Close the modal after submission
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Feed Back Form</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>                            
                        <h5>Talk to us;</h5>
                            <div className="ms-3 mb-3">
                                <p>1. Have you understood what we would like to do?</p>
                                <p>2. How do you think we can better implement the idea?</p>
                                <p>3. What questions need more explanation?</p>
                                <p>4. What question should we include in the FAQs?</p>
                            </div>                            

                            {/* FeedBack */}
                            <div className="mb-3">
                                <label className="form-label">Type your feedback below:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>
                                    Discard
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedBackForm;
