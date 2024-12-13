import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CommunityNeedsCard({ sub_category }) {
    const { solutions, subCategories, needs, data } = useContext(DataContext);
    const [currentSubCategory, setCurrentSubCategory] = useState(sub_category);
    const [totalOwners, setTotalOwners] = useState(currentSubCategory?.total_owners || 0);

    useEffect(() => {
        const updatedSubCategory = needs.find(
            (subCat) => subCat.sub_category === sub_category.sub_category
        );
        setCurrentSubCategory(updatedSubCategory);
        setTotalOwners(updatedSubCategory?.total_owners || 0);
    }, [data, needs, sub_category]);

    const getSolutions = (shops, need) => {
        const matchingSolutions = shops.filter((shop) => shop.subcategory === need);
        return matchingSolutions.length;
    };

    const shopSolutions = sub_category?.sub_category
        ? getSolutions(solutions, sub_category.sub_category)
        : 0;

    const description = subCategories.find(
        (sub) => sub.name === sub_category.sub_category
    )?.description;

    function getSortedLocationsForSubcategory(subCategoryData) {
        if (!subCategoryData || !subCategoryData.items) return [];
        const locationCounts = {};
        subCategoryData.items.forEach((item) => {
            locationCounts[item.location] = (locationCounts[item.location] || 0) + 1;
        });
        return Object.entries(locationCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([location]) => location);
    }

    const sortedLocations = getSortedLocationsForSubcategory(currentSubCategory);

    return (
        <div className="card mb-3 mx-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{sub_category.sub_category}</h5>
                    <div className="d-flex align-items-center">
                        <h4 className="mb-0 me-1">
                            {totalOwners}
                            <FontAwesomeIcon icon={faUser} className="fa-fw mx-1" />
                        </h4>
                    </div>
                </div>
                <hr />
                <p className="card-text">
                    <strong>Description:</strong> {description || 'No description available'}
                </p>
                <p className="card-text">
                    <strong>Locations:</strong> {sortedLocations?.[0] || 'No locations'}...{' '}
                    <span className="ms-3" style={{ color: 'blue' }}>
                        {sortedLocations?.length || 0}
                    </span>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/CommunityNeedsDetails" state={{ subCategory: currentSubCategory }}>
                        See Specific Needs...
                    </Link>
                    <Link to="/Solutions" state={currentSubCategory}>
                        <button className="btn btn-primary">
                            Solutions<sup className="top-right">{shopSolutions}</sup>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CommunityNeedsCard;
