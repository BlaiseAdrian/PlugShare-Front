import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';

function NeedForm({ show, onClose, t_itle = '', c_ategory = '', l_ocation = '', p_urpose = '', d_etails = '' }) {
    const [title, setTitle] = useState(t_itle);
    const [category, setCategory] = useState(c_ategory);
    const [location, setLocation] = useState(l_ocation);
    const [purpose, setPurpose] = useState(p_urpose);
    const [details, setDetails] = useState(d_etails);
    const [otherCategory, setOtherCategory] = useState('');
    const [otherLocation, setOtherLocation] = useState('');

    const { addItem } = useContext(DataContext);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (e.target.value !== 'Other') {
            setOtherCategory('');
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        if (e.target.value !== 'Other') {
            setOtherLocation('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNeed = {
            id: Date.now(), // Use a unique ID
            owner: ['Tom', 'Mark'],
            title: title,
            category: category === 'Other' ? otherCategory : category,
            location: location === 'Other' ? otherLocation : location,
            percentage: '80%',
            purpose: purpose,
            details: details,
        };

        addItem(newNeed); // Add item to context
        onClose(); // Close the modal after submission
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to List</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Category:</label>
                                <select className="form-select" value={category} onChange={handleCategoryChange}>
                                    <option value="">Select Category</option>
                                    <option value="House Hold Items">House Hold Items</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Other">Other</option>
                                </select>
                                {category === 'Other' && (
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Specify other category"
                                        value={otherCategory}
                                        onChange={(e) => setOtherCategory(e.target.value)}
                                    />
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Title of your need:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <select className="form-select" value={location} onChange={handleLocationChange}>
                                    <option value={l_ocation}>{l_ocation}</option>
                                    <option value="Kampala">Kampala</option>
                                    <option value="Entebbe">Entebbe</option>
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
                            <div className="mb-3">
                                <label className="form-label">Purpose:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={purpose}
                                    onChange={(e) => setPurpose(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Details:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                ></textarea>
                            </div>
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

export default NeedForm;
