import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar({toggleSideNav, page = 'try', state}) {

    const location = useLocation();

    // Define the page hierarchy with possible parent pages for subpages
    const pageHierarchy = {
        '/': { name: 'Community Needs' },
        '/personal-list': { name: 'Personal List' },
        '/faqs': { name: 'FAQs' },
        '/Plugs': { name: 'Community Plugs' },
        '/Endorsers': { name: 'Endorsers' },
        '/MyEndorsements': { name: 'My Endorsements' },
        '/EndorsementSolutionsDetails': { name: 'Details', parent: '/MyEndorsements' },
        '/AlternativesDetails': { name: 'Details', parent: '/SolutionAlternatives' },
        '/PlugDetails': { name: 'Plug Details', parent: '/Plugs' }, 
        '/SolutionsDetails':  {
            name: 'Details',
            parents: ['/Solutions', '/community-plugs'], // Multiple possible parents
        }, 
        '/PersonalNeedsDetails': {
            name: `${page} Details`,
            parents: ['/personal-list'], 
        }, 
        '/CommunityNeedsDetails': {
            name: 'Details',
            parents: ['/'], 
        }, 
        '/SolutionAlternatives': {
            name: 'Alternatives',
            parents: ['/Solutions', '/community-plugs'], 
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
        <nav className="navbar mb-3 navbar-light">
        <button
        className={`navbar-toggler d-lg-none px-3 me-3`}
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

            <span className="navbar-text mb-0 fst-italic h6" aria-current="page">
            {breadcrumb.current.name}
            </span>
        </div>
        <span className="navbar-brand ms-auto fw-bold fs-3">PlugShare</span>
        </nav>
    );
}

export default Navbar;
