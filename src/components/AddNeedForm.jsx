import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from './DataContext';

function NeedForm({ show, onClose, id = '', c_ategory = '', sub_category = '', l_ocation = '', d_etails = '' }) {
    const { addItem, data, removeItem, categories, subCategories, locations } = useContext(DataContext);

    const [category, setCategory] = useState(c_ategory);
    const [subCategory, setSubCategory] = useState(sub_category);
    const [location, setLocation] = useState(l_ocation);
    const [details, setDetails] = useState(d_etails);
    const [statusMessage, setStatusMessage] = useState('');

    const [categorySearch, setCategorySearch] = useState(c_ategory);
    const [subCategorySearch, setSubCategorySearch] = useState(sub_category);
    const [locationSearch, setLocationSearch] = useState(l_ocation);

    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    // Filter logic for dropdowns
    const filteredCategories = categories.filter((cat) =>
        cat.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredSubCategories = subCategories
        .filter((subCat) => subCat.category === category) // Match the selected category
        .filter((subCat) =>
            subCat.name.toLowerCase().includes(subCategorySearch.toLowerCase()) // Filter by search input
        );

    const filteredLocations = locations.filter((loc) =>
        loc.toLowerCase().includes(locationSearch.toLowerCase())
    );

    // Select handlers
    const handleCategorySelect = (cat) => {
        setCategory(cat);
        setCategorySearch(cat);
        setSubCategory(''); // Reset subcategory when category changes
        setSubCategorySearch(''); // Clear subcategory input
        setShowCategoryDropdown(false);
    };

    const handleSubCategorySelect = (subCat) => {
        setSubCategory(subCat.name);
        setSubCategorySearch(subCat.name);
        setShowSubCategoryDropdown(false);
    };

    const handleLocationSelect = (loc) => {
        setLocation(loc);
        setLocationSearch(loc);
        setShowLocationDropdown(false);
    };

    useEffect(() => {
        // Initialize search inputs when the form is opened
        if (show) {
            setCategorySearch(c_ategory);
            setSubCategorySearch(sub_category);
            setLocationSearch(l_ocation);
        }
    }, [show, c_ategory, sub_category, l_ocation]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const currentUser = "Current User"; // Replace with actual current user logic

        const isUnchanged =
        category === c_ategory &&
        subCategory === sub_category &&
        location === l_ocation &&
        details === d_etails;

        // Check user limit
        const userOwnedItemsCount = Array.isArray(data)
            ? data.filter((item) => item.owner.includes(currentUser)).length
            : 0;

        if (userOwnedItemsCount >= 3) {
            setStatusMessage("You have exceeded the current limit of items you can submit (3)."); // Set failed message
            return;
        }

        if (id && isUnchanged) {
            const existingItem = Array.isArray(data) ? data.find((item) => item.id === id) : null;

            if (existingItem) {
                if (!existingItem.owner.includes(currentUser)) {
                    removeItem(existingItem.id);
                    addItem({
                        ...existingItem,
                        owner: [...existingItem.owner, currentUser], // Create a new array for owners
                      });
                }
                setStatusMessage("Item successfully added to your personal list!"); // Success message
                return;
            }
        }

        // Add a new item
        const newNeed = {
            id: Date.now(),
            owner: [currentUser],
            sub_category: subCategory,
            location: location,
            details: details,
        };

        addItem(newNeed);
        setStatusMessage("Item successfully added to your personal list!"); // Success message
    };
    
    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                    {statusMessage ? (
                        // Status Message (either success or failure)
                        <div className="modal-body text-center">
                            <h4 className={statusMessage.includes('successfully') ? "text-success" : "text-danger"}>
                                {statusMessage.includes('successfully') ? 'Success' : 'Error'}
                            </h4>
                            <p>{statusMessage}</p>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={onClose} // Close the modal
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="modal-header">
                                <h5 className="modal-title">Add to Personal List</h5>
                                <button type="button" className="btn-close" onClick={onClose}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    {/* Category Autocomplete */}
                                    <div className="mb-3 position-relative">
                                        <label className="form-label">Category:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={categorySearch}
                                            onChange={(e) => {
                                                setCategorySearch(e.target.value);
                                                setShowCategoryDropdown(true);
                                            }}
                                            onFocus={() => setShowCategoryDropdown(true)}
                                            onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 150)}
                                            placeholder="Search category"
                                        />
                                        {showCategoryDropdown && (
                                            <ul className="dropdown-menu show" style={{ position: 'absolute', width: '100%' }}>
                                                {filteredCategories.map((cat) => (
                                                    <li key={cat} onClick={() => handleCategorySelect(cat)}>
                                                        <button className="dropdown-item">{cat}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
    
                                    {/* Subcategory Autocomplete */}
                                    <div className="mb-3 position-relative">
                                        <label className="form-label">Sub-Category:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={subCategorySearch}
                                            onChange={(e) => {
                                                setSubCategorySearch(e.target.value);
                                                setShowSubCategoryDropdown(true);
                                            }}
                                            onFocus={() => setShowSubCategoryDropdown(true)}
                                            onBlur={() => setTimeout(() => setShowSubCategoryDropdown(false), 150)}
                                            placeholder="Search sub-category"
                                            disabled={!category}
                                        />
                                        {showSubCategoryDropdown && (
                                            <ul className="dropdown-menu show" style={{ position: 'absolute', width: '100%' }}>
                                                {filteredSubCategories.map((subCat) => (
                                                    <li key={subCat.name} onClick={() => handleSubCategorySelect(subCat)}>
                                                        <button className="dropdown-item">{subCat.name}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
    
                                    {/* Location Autocomplete */}
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
    
                                    {/* Details Text Area */}
                                    <div className="mb-3">
                                        <label className="form-label">Details:</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={details}
                                            onChange={(e) => setDetails(e.target.value)}
                                        ></textarea>
                                    </div>
    
                                    {/* Modal Footer */}
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
 }  

    export default NeedForm;
