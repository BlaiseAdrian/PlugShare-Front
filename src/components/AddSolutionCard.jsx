import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionForm({ show, onClose, edit = '', fullSoln, id = '', shopName = '', shopDetails = '', shopContacts = '', shopEmail = '', shopCatalogue = '', address = '', title = '', currentUser }) {
    const [name, setName] = useState(shopName);
    const [contacts, setContacts] = useState(shopContacts);
    const [email, setEmail] = useState(shopEmail);    
    const [location, setLocation] = useState('');
    const [catalogue, setCatalogue] = useState(shopCatalogue);
    const [details, setDetails] = useState(shopDetails);
    const [locationSearch, setLocationSearch] = useState('');

    
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const { addSolution, locations, removeSoln } = useContext(DataContext);

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

        const isUnchanged =
        name === shopName  &&
        catalogue === shopCatalogue &&
        contacts === shopContacts &&
        email === shopEmail &&
        location === address &&
        details === shopDetails;


        if (id && isUnchanged) return;
        
        if (id) {
            const updatedSoln = {
                ...fullSoln,
                name: name,
                location: location,
                email: email,
                provider: currentUser,
                catalogue: catalogue,
                contacts: contacts,
                comments: [//Deal with updated descriptions
                    { comment: details ? details: 'Appreciate Me below', date: new Date().toISOString().split('T')[0], owner: currentUser, agreements: [] },
                  ]
            }
            removeSoln(id);
            addSolution(updatedSoln); // Add solution to context
            onClose(); // Close the modal after submission
            return;
        }

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
                { comment: details ? details: 'Appreciate Me below', date: new Date().toISOString().split('T')[0], owner: currentUser, agreements: [] },
              ]
        };

console.log(newSolution);

        addSolution(newSolution); // Add solution to context
        onClose(); // Close the modal after submission
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Share your Plug</h5>
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
                                    required
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
                                            required
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
                                    required
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
                                    required
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
