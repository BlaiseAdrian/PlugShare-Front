import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlternativesModal({ show, onClose, address }) {
    const [altternative, setAltternative] = useState(address);


    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select A better Alternative</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Add from List</label>
                                <select className="form-select" value={altternative} onChange={(e) => setAltternative(e.target.value)}>
                                    <option value="Sula">Sulas</option>
                                    <option value="Other">Other</option>
                                </select>
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


export default AlternativesModal;
