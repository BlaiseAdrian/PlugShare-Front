import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionForm({ show, onClose, address }) {
    const [location, setLocation] = useState(address);
    const [quality, setQuality] = useState("");
    const [contacts, setContacts] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [otherLocation, setOtherLocation] = useState("");

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        if (e.target.value !== "Other") {
            setOtherLocation("");
        }
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
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <select className="form-select" value={location} onChange={handleLocationChange}>
                                    <option value={address}>{address}</option>
                                    <option value="Other">Other</option>
                                </select>
                                {location === "Other" && (
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
                                <label className="form-label">Quality Rating (Compared to Benchmark):</label>
                                <select className="form-select" value={quality} onChange={(e) => setQuality(e.target.value)}>
                                    <option value="">Select Quality</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Premium">Premium</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Prices:</label>
                                <input type="text" className="form-control" value={price}  onChange={(e) => setPrice(e.target.value)}/>
                            </div>                            
                            <div className="mb-3">
                                <label className="form-label">Contacts:</label>
                                <input type="text" className="form-control" value={contacts}  onChange={(e) => setContacts(e.target.value)}/>
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
                        </form>
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


export default SolutionForm;
