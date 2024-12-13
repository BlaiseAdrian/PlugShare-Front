import React, { useState, useEffect, useMemo } from 'react';

function Filter({ items, contextData, sortOptions, onSort, onFilter }) {
  const [selectedSortParam, setSelectedSortParam] = useState('popularity');
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Extract unique options based on the selectedSortParam
  const uniqueOptions = useMemo(() => {
    if (!selectedSortParam || selectedSortParam === 'popularity') return [];
    if (selectedSortParam === 'sub_category') {
      return [...new Set(contextData.subCategories.map((sub) => sub.name))];
    }
    if (selectedSortParam === 'unique_locations') {
      return [...new Set(contextData.locations)];
    }
    return [];
  }, [selectedSortParam, contextData]);

  // Filter options based on user input
  const filteredOptions = uniqueOptions.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );  

  const handleSortChange = (param) => {
    setSelectedSortParam(param);
    setSearchValue('');
    setSelectedValue('');
    setIsDropdownVisible(false);
    onFilter(items);

    // Sort the items
    const sorted = [...items].sort((a, b) => {
      const aField = a[param];
      const bField = b[param];

      if (Array.isArray(aField) && Array.isArray(bField)) {
        return aField[0]?.localeCompare(bField[0] ?? '') ?? 0;
      }
      if (typeof aField === 'number') return bField - aField;
      return (aField ?? '').localeCompare(bField ?? '');
    });
    onSort(sorted);
  };

  const handleOptionClick = (option) => {
    setSearchValue(option);
    setSelectedValue(option);
    setIsDropdownVisible(false);
  };

  // Handle filtering based on the selected value
  useEffect(() => {
    if (selectedSortParam && selectedValue) {
      const filteredItems = items.filter((item) => {
        const field = item[selectedSortParam];
        return Array.isArray(field)
          ? field.includes(selectedValue)
          : field === selectedValue;
      });
      onFilter(filteredItems);
    } else {
      onFilter(items);
    }
  }, [selectedSortParam, selectedValue, items, onFilter]);

    // Handle selecting a value from the dropdown
    const handleSelectValue = (value) => {
      setSelectedValue(value);
      setSearchValue(value);
      setIsDropdownVisible(false);
    };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="dropdown mb-3 ms-3">
        <div className="d-flex align-items-center">
          <div
            className="dropdown-toggle filter"
            id="sortDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {sortOptions.find((opt) => opt.value === selectedSortParam)?.label || 'Sort By'}
          </div>
          <ul
            className="dropdown-menu overflow-auto"
            style={{ maxHeight: '35vh' }}
            aria-labelledby="sortDropdown"
          >
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button className="dropdown-item" onClick={() => handleSortChange(option.value)}>
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedSortParam !== 'popularity' && (
        <div className="dropdown position-relative" style={{ marginLeft: '5vw' }}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsDropdownVisible(true);
            }}
            onFocus={() => setIsDropdownVisible(true)}
          />
          {isDropdownVisible && filteredOptions.length > 0 && (
            <ul
              className="dropdown-menu overflow-auto show"
              style={{
                maxHeight: '35vh',
                width: '100%',
                zIndex: 1,
                position: 'absolute',
              }}
            >
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSelectValue('')}
              >
                All
              </button>
            </li>              
              {filteredOptions.map((option, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Filter;
