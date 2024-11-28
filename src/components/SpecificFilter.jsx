import React, { useState, useEffect } from 'react';

function SpecificFilter({ items, sortParameter, onFilter }) {
  const [selectedValue, setSelectedValue] = useState('');

  // Extract unique options based on sortParameter
  const uniqueOptions = React.useMemo(() => {
    if (!sortParameter) return [];
    const uniqueSet = new Set(items.map((item) => item[sortParameter]));
    return Array.from(uniqueSet);
  }, [sortParameter]);

  useEffect(() => {
    if (selectedValue) {
      const filteredItems = items.filter(
        (item) => item[sortParameter] === selectedValue
      );
      onFilter(filteredItems); // Send filtered list to parent
    } else {
      onFilter(items); // Reset to all items if no filter selected
    }
  }, [selectedValue, sortParameter, onFilter]);

  return (
    <div className="dropdown mb-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="filterDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        disabled={!sortParameter}
      >
        {sortParameter
          ? `Filter by ${sortParameter}: ${selectedValue || 'Select'}`
          : 'Select a filter'}
      </button>
      <ul className="dropdown-menu overflow-auto" style={{maxHeight: "35vh"}} aria-labelledby="filterDropdown">
        <li>
          <button
            className="dropdown-item"
            onClick={() => setSelectedValue('')}
          >
            Show All
          </button>
        </li>
        {uniqueOptions.map((option, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => setSelectedValue(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecificFilter;
