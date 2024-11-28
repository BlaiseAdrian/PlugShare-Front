import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionForm({ show, onClose, address = '', title = '' }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState(address);
    const [expectations, setExpectations] = useState('');
    const [contacts, setContacts] = useState('');
    const [exceptions, setExceptions] = useState('');
    const [details, setDetails] = useState('');
    const [otherLocation, setOtherLocation] = useState('');

    const { addSolution } = useContext(DataContext);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        if (e.target.value !== 'Other') {
            setOtherLocation('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSolution = {
            id: Date.now(),
            name: name,
            location: location === 'Other' ? otherLocation : location,
            expectations: expectations,
            exceptions: exceptions,
            rating: 0.0,
            flags: 0,
            contacts: contacts,
            details: details,
            need: title,
            alternatives: [],
            endorsers: ['Sarah', 'Isaac'],
        };

        console.log('New Solution:', newSolution); // Debugging log
        addSolution(newSolution); // Add solution to context
        onClose(); // Close the modal after submission
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add a Solution</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="mb-3">
                                <label className="form-label">Name of Shop/Provider</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Location */}
                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <select className="form-select" value={location} onChange={handleLocationChange}>
                                    <option value={address}>{address}</option>
                                    <option value="Other">Other</option>
                                </select>
                                {location === 'Other' && (
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Specify other location"
                                        value={otherLocation}
                                        onChange={(e) => setOtherLocation(e.target.value)}
                                    />
                                )}
                            </div>

                            {/* Expectations */}
                            <div className="mb-3">
                                <label className="form-label">Expectations:</label>
                                <textarea
                                    className="form-control"
                                    rows="2"
                                    value={expectations}
                                    onChange={(e) => setExpectations(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Exceptions */}
                            <div className="mb-3">
                                <label className="form-label">Exceptions:</label>
                                <textarea
                                    className="form-control"
                                    rows="2"
                                    value={exceptions}
                                    onChange={(e) => setExceptions(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Contacts */}
                            <div className="mb-3">
                                <label className="form-label">Contacts:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contacts}
                                    onChange={(e) => setContacts(e.target.value)}
                                />
                            </div>

                            {/* Details */}
                            <div className="mb-3">
                                <label className="form-label">Details:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
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

export default SolutionForm;
