import React, { useState, useEffect } from 'react';

function Filter({ items, sortOptions, onSort }) {
    const [selectedSortParam, setSelectedSortParam] = useState('');

  const handleSortChange = (param) => {
    setSelectedSortParam(param);

    // Perform sorting
    const sorted = [...items].sort((a, b) => {
      if (typeof parseInt(a[param]) === 'number') return parseInt(b[param]) - parseInt(a[param]);
      return a[param].localeCompare(b[param]);
    });

    // Send the sorted list and selected parameter to the parent
    onSort(sorted, param);
  };

  return (
    <div className="dropdown mb-3 ms-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="sortDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By: {selectedSortParam || 'Popularity'}
      </button>
      <ul className="dropdown-menu overflow-auto" style={{maxHeight: "35vh"}} aria-labelledby="sortDropdown">
        {sortOptions.map((option) => (
          <li key={option.value}>
            <button
              className="dropdown-item"
              onClick={() => handleSortChange(option.value)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Filter;
