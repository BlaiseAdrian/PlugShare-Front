import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSubmitForm } from '../hooks/useSubmitForm';
import { FormLoader } from './FormLoader';
import { FormErrorAlert } from './FormErrorAlert';
import { FormSuccessAlert } from './FormSuccessAlert';
import { useUser } from '../hooks/useUser';
import { useDashboard } from '../hooks/useDashboard';

function SolutionForm({ show, onClose, edit = '', fullSoln, id = '', shopName = '', shopDetails = '', shopContacts = '', shopEmail = '', shopCatalogue = '', address = '', title = '', need_id, sub_category_id }) {
    const [solution, setSolution] = useState(shopName);
    const [phone_number, setPhone_number] = useState(shopContacts);
    const [email, setEmail] = useState(shopEmail);    
    const [location, setLocation] = useState('');
    const [link, setLink] = useState(shopCatalogue);
    const [details, setDetails] = useState(shopDetails);
    const [locationSearch, setLocationSearch] = useState('');

    
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const { addSolution, locations, removeSoln } = useContext(DataContext);

    const API = "https://api-plugshare.growthspringers.com"
    const {user} = useUser();
    const {
      isLoading,
      error,
      setError,
      data:dataFeedback,
      setData,
      handleSubmit
    } = useSubmitForm({url: `${API}/solutions?user_id=${user}&need_id=${need_id}&sub_category_id=${sub_category_id}` })

    const filteredLocations = locations.filter((loc) =>
        loc.toLowerCase().includes(locationSearch.toLowerCase())
    );
    //console.log(`${API}/solutions?user_id=${user}&${need_id}&${sub_category_id}`)
    const handleLocationSelect = (loc) => {
        setLocation(loc);
        setLocationSearch(loc);
        setShowLocationDropdown(false);
    };


    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
            { isLoading && <FormLoader text="Adding Solution ..." />}
                                    { dataFeedback && <FormSuccessAlert setData={setData} msg = {dataFeedback.message} /> }
                                    { 
                                      error &&
                                      <FormErrorAlert
                                        errorTitle="Failed to add Solution"
                                        msg = {error.message}
                                        setError={setError}
                                      />
                                    }
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
                                    name = 'solution'
                                    required
                                    value={solution}
                                    onChange={(e) => setSolution(e.target.value)}
                                />
                            </div>

                                    {/* Location */}
                                    <div className="mb-3 position-relative">
                                        <label className="form-label">Location:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name = 'location'
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
                                    name = 'phone_number'
                                    required
                                    value={phone_number}
                                    onChange={(e) => setPhone_number(e.target.value)}
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email, if any:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name = 'email'
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
                                    name = 'link'
                                    required
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>                            

                            {/* Details */}
                            <div className="mb-3">
                                <label className="form-label">Helpful Details:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name = 'details'
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
