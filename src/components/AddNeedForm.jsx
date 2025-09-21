import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from './DataContext';
import { useSubmitForm } from '../hooks/useSubmitForm';
import { FormLoader } from './FormLoader';
import { FormErrorAlert } from './FormErrorAlert';
import { FormSuccessAlert } from './FormSuccessAlert';
import { useUser } from '../hooks/useUser';
import { useDashboard } from '../hooks/useDashboard';

function NeedForm({ show, onClose, userId, edit = '', id = '', c_ategory = '', sub_category = '', l_ocation = '', d_etails = '' }) {
    const { addItem, data, removeItem, subCategories, locations } = useContext(DataContext);

    const [category, setCategory] = useState(c_ategory);
    const [subCategory, setSubCategory] = useState(sub_category);
    const [location, setLocation] = useState(l_ocation);
    const [details, setDetails] = useState(d_etails);
    const [statusMessage, setStatusMessage] = useState('');

    const [categorySearch, setCategorySearch] = useState(c_ategory);
    const [subCategorySearch, setSubCategorySearch] = useState(sub_category);
    const [locationSearch, setLocationSearch] = useState(l_ocation);
    const { dashboard, setDashboard } = useDashboard();
    const subcategory_array = dashboard.subcategories.all_needs;
    //console.log(subcategory_array)
    
    const categories = ['Automotive Products', 'Automotive Services', 'Baby Products', 'Beauty and Wellness Services', 'Beauty Products', 'Books and Stationery', 'Building Construction Services', 'Building Materials', 'Clothing and Accessories', 'Educational and Training Services', 'Electronics', 'Energy and Power Supplies', 'Environmental Services', 'Event Planning and Management Services', 'Financial and Accounting Services', 'Food and Beverages', 'Furniture', 'Health and Medical Services', 'Health and Personal Care', 'Hobbies and Crafts', 'Home Appliances', 'Home Decor', 'Home Maintenance and Repair Services', 'Industrial Equipment', 'IT and Tech Support Services', 'Legal and Paralegal Services', 'Marketing and Advertising Services', 'Musical Instruments', 'Office Supplies and Equipment', 'Personal Lifestyle Services', 'Pet Care Services', 'Pet Supplies', 'Real Estate and Property Services', 'Security and Protection Services', 'Sports and Outdoors', 'Tools and Hardware', 'Travel and Tourism Services']
    const subcategories = [];
    dashboard.subcategories.all_needs.forEach(element => {
        const exists = subcategories.find(item => item === element.sub_categories);
        if (!exists) {
            subcategories.push(element.sub_categories);
        }
      });

    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const API = "https://api-plugshare.growthspringers.com"
    const {user} = useUser()
    const {
      isLoading,
      error,
      setError,
      data:dataFeedback,
      setData,
      handleSubmit
    } = useSubmitForm({url: `${API}/communityneeds?user_id=${user}` })

    // Filter logic for dropdowns
    const filteredCategories = categories.filter((cat) =>
        cat.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredSubCategories = subcategory_array
        .filter((subCat) => subCat.categories === category) // Match the selected category
        .filter((subCat) =>
            subCat.sub_categories.toLowerCase().includes(subCategorySearch.toLowerCase()) // Filter by search input
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
        setSubCategory(subCat._id);
        setSubCategorySearch(subCat.sub_categories);
        setShowSubCategoryDropdown(false);
    };
//console.log(subCategory);
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
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const currentUser = userId; // Replace with actual current user logic

    //     const isUnchanged =
    //     category === c_ategory &&
    //     subCategory === sub_category &&
    //     location === l_ocation &&
    //     details === d_etails;

    //     // Check user limit
    //     const userOwnedItemsCount = Array.isArray(data)
    //         ? data.filter((item) => item.owner.includes(currentUser)).length
    //         : 0;

    //     if (userOwnedItemsCount >= 3) {
    //         setStatusMessage("You have exceeded the current limit of items you can submit (3)."); // Set failed message
    //         return;
    //     }

    //     if (id && isUnchanged) {
    //         const existingItem = Array.isArray(data) ? data.find((item) => item.id === id) : null;

    //         if (existingItem) {
    //             if (!existingItem.owner.includes(currentUser)) {
    //                 removeItem(existingItem.id);
    //                 addItem({
    //                     ...existingItem,
    //                     owner: [...existingItem.owner, currentUser], // Create a new array for owners
    //                   }, userId);
    //             }
    //             setStatusMessage("Item successfully added to your personal list!"); // Success message
    //             return;
    //         }
    //     }

    //     // Add a new item
    //     const newNeed = {
    //         id: Date.now(),
    //         owner: [currentUser, currentUser],
    //         sub_category: subCategory,
    //         location: location,
    //         details: details,
    //     };
    //     if (id && edit) {
    //         removeItem(id);
    //     }
    //     addItem(newNeed, userId);
    //     setStatusMessage("Item successfully added to your personal list!"); // Success message
    // };
    
    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            { isLoading && <FormLoader text="Adding need ..." />}
                                    { dataFeedback && <FormSuccessAlert setData={setData} msg = {dataFeedback.message} /> }
                                    { 
                                      error &&
                                      <FormErrorAlert
                                        errorTitle="Failed to add need"
                                        msg = {error.message}
                                        setError={setError}
                                      />
                                    }
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
                                <h5 className="modal-title">Add to Your Requirements</h5>
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
                                            required
                                            name='category'
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
                                            <ul className="dropdown-menu show overflow-auto" style={{ position: 'absolute', width: '100%', maxHeight: '50vh'  }}>
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
                                            required
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
                                        {/* Hidden input to submit the _id */}
                                        <input type="hidden" name="sub_category_id" value={subCategory} />
                                        
                                        {showSubCategoryDropdown && (
                                            <ul className="dropdown-menu show overflow-auto" style={{ position: 'absolute', width: '100%', maxHeight: '50vh' }}>
                                                {filteredSubCategories.map((subCat) => (
                                                    <li key={subCat._id} onClick={() => handleSubCategorySelect(subCat)}>
                                                        <button className="dropdown-item">{subCat.sub_categories}</button>
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
                                            required
                                            name='location'
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
                                            name='purpose'
                                            className="form-control"
                                            rows="3"
                                            value={details}
                                            required
                                            onChange={(e) => setDetails(e.target.value)}
                                        ></textarea>
                                    </div>
    
                                    {/* Modal Footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                                            Discard
                                        </button>
                                        <button disabled = {isLoading} type="submit" className="btn btn-primary">
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

