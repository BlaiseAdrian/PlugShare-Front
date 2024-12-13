import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionForm({ show, onClose, address = '', title = '', currentUser }) {
    const [name, setName] = useState('');
    const [contacts, setContacts] = useState('');
    const [email, setEmail] = useState('');    
    const [location, setLocation] = useState(address);
    const [catalogue, setCatalogue] = useState('');
    const [details, setDetails] = useState('');
    const [locationSearch, setLocationSearch] = useState(address);

    
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const { addSolution, locations } = useContext(DataContext);

    const filteredLocations = locations.filter((loc) =>
        loc.toLowerCase().includes(locationSearch.toLowerCase())
    );

    const handleLocationSelect = (loc) => {
        setLocation(loc);
        setLocationSearch(loc);
        setShowLocationDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSolution = {
            id: Date.now(),
            name: name,
            location: location,
            email: email,
            provider: currentUser,
            catalogue: catalogue,
            red_flags: [],
            contacts: contacts,
            subcategory: title,
            alternatives: [],
            endorsers: [],
            comments: [
                { comment: 'Appreciate Me below', date: new Date().toISOString().split('T')[0], owner: currentUser, agreements: [] },
              ]
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
                                    <div className="mb-3 position-relative">
                                        <label className="form-label">Location:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={locationSearch}
                                            onChange={(e) => {
                                                setLocationSearch(e.target.value);
                                                setShowLocationDropdown(true);
                                            }}
                                            onFocus={() => setShowLocationDropdown(true)}
                                            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
                                            placeholder="Search location"
                                        />
                                        {showLocationDropdown && (
                                            <ul className="dropdown-menu show" style={{ position: 'absolute', width: '100%' }}>
                                                {filteredLocations.map((loc) => (
                                                    <li key={loc} onClick={() => handleLocationSelect(loc)}>
                                                        <button className="dropdown-item">{loc}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email, if any:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>                            

                            {/* Catalogue */}
                            <div className="mb-3">
                                <label className="form-label">Link to View Catalogue</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={catalogue}
                                    onChange={(e) => setCatalogue(e.target.value)}
                                />
                            </div>                            

                            {/* Details */}
                            <div className="mb-3">
                                <label className="form-label">Helpful Details:</label>
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
