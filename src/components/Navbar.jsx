// src/components/Navbar.js
/*import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light px-3">
            <span className="navbar-text mb-0 fst-italic h6">Community Plugs</span>
      <NavLink to="/personal-list" activeClassName="active">Personal List</NavLink>
      <NavLink to="/faq" activeClassName="active">FAQs</NavLink>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <span className="navbar-text mb-0 fst-italic h6">{location.pathname}</span>
      <span className="navbar-brand fw-bold">PlugShare</span>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNav from './SideNav';

function NavBar() {

    const location = useLocation();

    return (
        <header>
            <nav className="navbar navbar-light bg-light mb-3">
                <div className="container-fluid">   
                    <span className="navbar-text mb-0 fst-italic h6">{location.pathname}</span>
                    <span className="navbar-brand fw-bold">PlugShare</span>    
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    // State to store the page titles
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState('Main Page');

    // Define main pages that appear in the side navigation
    const mainPages = {
        '/': 'Community Needs',
        '/community-plugs': 'Community Plugs',
        '/personal-list': 'Personal List',
        '/faqs': 'FAQs',
    };

    useEffect(() => {
        // Check if the current page is a main page or a subpage
        const isMainPage = mainPages.hasOwnProperty(location.pathname);
        
        if (isMainPage) {
            // On a main page, only show the current page
            setPrevPage(null);
            setCurrentPage(mainPages[location.pathname]);
        } else {
            // On a subpage, set the main page as previous and show the subpage name as current
            const mainPagePath = Object.keys(mainPages).find(path => location.pathname.startsWith(path));
            setPrevPage(mainPagePath ? mainPages[mainPagePath] : null);
            
            // Customize subpage names based on pathname (example: for dynamic routes)
            const pageNames = {     
                '/NeedsDetails': 'Details',        
                '/SolutionsDetails': ' Solution Details',      
                '/Solutions': 'Solutions',
            };
            
            setCurrentPage(pageNames[location.pathname] || 'Subpage');
        }
    }, [location.pathname]); // Run this effect whenever the route changes

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">My App</span>
                
                <div className="navbar-nav ms-auto">
                    {prevPage && (
                        <Link to="/" className="nav-link" onClick={() => navigate(-1)}>
                            {prevPage}
                        </Link>
                    )}
                    
                    <span className="nav-link active" aria-current="page">
                        {currentPage}
                    </span>
                </div>
            </div>
        </nav>
    );
}
    
            <span className="navbar-text mb-0 fst-italic h6 me-3" aria-current="page">
            {breadcrumb.parent && (
                <Link to={breadcrumb.parent.path} className="nav-link">
                {breadcrumb.parent.name}
                </Link>
            )}
            </span>

export default Navbar;*/


import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar({toggleSideNav}) {

    const location = useLocation();

    // Define the page hierarchy with possible parent pages for subpages
    const pageHierarchy = {
        '/': { name: 'Community Needs' },
        '/community-plugs': { name: 'Community Plugs' },
        '/personal-list': { name: 'Personal List' },
        '/faqs': { name: 'FAQs' },
        '/NeedsDetails': { name: 'Details', parent: '/products' },  
        '/SolutionsDetails':  {
            name: 'Solution Details',
            parents: ['/Solutions', '/community-plugs'], // Multiple possible parents
        }, 
        '/NeedsDetails': {
            name: 'Details',
            parents: ['/personal-list', '/'], // Multiple possible parents
        },
        '/Solutions': {
            name: 'Solutions',
            parents: ['/personal-list', '/'], // Multiple possible parents
        },
    };

    // State to store the breadcrumb
    const [breadcrumb, setBreadcrumb] = useState({
        parent: null,
        current: { path: '/', name: 'Home' },
    });

    // State to track navigation history stack
    const [historyStack, setHistoryStack] = useState([]);

    useEffect(() => {
        const path = location.pathname;

        // Update history stack
        setHistoryStack((prevStack) => {
            const newStack = [...prevStack];
            if (newStack[newStack.length - 1] !== path) {
                newStack.push(path);
            }
            return newStack;
        });

        // Determine the current and previous pages
        const currentPage = pageHierarchy[path];
        if (currentPage) {
            let parentPage = null;

            // Check if the current page has multiple potential parents
            if (currentPage.parents) {
                // Search through the stack to find the actual parent in the navigation flow
                for (let i = historyStack.length - 1; i >= 0; i--) {
                    if (currentPage.parents.includes(historyStack[i])) {
                        parentPage = historyStack[i];
                        break;
                    }
                }
            } else if (currentPage.parent) {
                parentPage = currentPage.parent;
            }

            // Set the breadcrumb based on the resolved parentPage
            setBreadcrumb({
                parent: parentPage ? { path: parentPage, name: pageHierarchy[parentPage].name } : null,
                current: { path, name: currentPage.name },
            });
        }
    }, [location.pathname]);

    return (
        <nav className="navbar mb-3 navbar-light bg-light">
        <button
        className={`navbar-toggler d-lg-none px-3`}
                        type="button"
                        onClick={toggleSideNav}
                        aria-label="Toggle sidebar"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
        <div className="d-flex align-items-center">
            {breadcrumb.parent && (
                <Link to={breadcrumb.parent.path} className="nav-link">
                <FontAwesomeIcon icon={faArrowLeft} className="fa-fw"/>
                </Link>
            )}

            <span className="navbar-text mb-0 me-2 fst-italic h6 ps-3" aria-current="page">
            {breadcrumb.current.name}
            </span>
        </div>
        <span className="navbar-brand ms-auto fw-bold">PlugShare</span>
        </nav>
    );
}

export default Navbar;
