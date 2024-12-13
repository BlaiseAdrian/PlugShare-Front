import React, { useState, useEffect, useMemo, useRef } from 'react';

function SpecificFilter({ items, sortParameter, onFilter, contextData }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const initialRender = useRef(true); // Track the initial render

  // Extract unique options based on sortParameter and context
  const uniqueOptions = useMemo(() => {
    if (!sortParameter || sortParameter === 'popularity') return [];
    if (sortParameter === 'sub_category') return contextData.subCategories;
    if (sortParameter === 'location') {
      return contextData.locations.map((loc) =>
        Array.isArray(loc) ? loc.join(', ') : loc // Handle arrays of locations
      );
    }
    return [];
  }, [sortParameter, contextData]);

  // Filter options based on user input
  const filteredOptions = uniqueOptions.filter((option) =>
    option.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  // Apply filtering to the parent component
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; // Skip on the initial render
      return;
    }

    if (selectedValue) {
      const filteredItems = items.filter((item) => {
        const field = item[sortParameter];
        return Array.isArray(field)
          ? field.includes(selectedValue)
          : field === selectedValue;
      });
      onFilter(filteredItems); // Send filtered list to parent
    } else {
      onFilter(items); // Reset to all items if no filter selected
    }
  }, [selectedValue, sortParameter, items, onFilter]);

  // Reset selection and search value when sortParameter changes
  useEffect(() => {
    setSelectedValue('');
    setSearchValue('');
  }, [sortParameter]);

  return (
    <div
      className={`dropdown mb-3 ${
        !sortParameter || sortParameter === 'popularity' ? 'disabled' : ''
      }`}
    >
      <div
        className="dropdown-toggle filter"
        id="filterDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedValue || (sortParameter ? 'Select' : 'Disabled')}
      </div>
      <ul
        className="dropdown-menu overflow-auto"
        style={{ maxHeight: '35vh' }}
        aria-labelledby="filterDropdown"
      >
        {sortParameter && sortParameter !== 'popularity' && (
          <>
            <li>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setSelectedValue('')}
              >
                Show All
              </button>
            </li>
            {filteredOptions.map((option, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  onClick={() => setSelectedValue(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default SpecificFilter;
