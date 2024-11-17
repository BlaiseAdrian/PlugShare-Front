/*
<div className="profile-section text-center py-4">
<img
    src="https://via.placeholder.com/100"
    alt="Profile"
    className="profile-pic rounded-circle mb-2"
/>
<h6 className="profile-name">John Doe</h6>
</div>

<nav className="nav-links">
<Link to="/community-plugs" className="nav-link d-flex align-items-center py-2">
    <i className="fas fa-users me-2"></i> Community Plugs
</Link>
<Link to="/" className="nav-link d-flex align-items-center py-2">
    <i className="fas fa-list me-2"></i> Community Needs
</Link>
<Link to="/personal-list" className="nav-link d-flex align-items-center py-2">
    <i className="fas fa-list me-2"></i> Personal List
</Link>
<Link to="/faqs" className="nav-link d-flex align-items-center py-2">
    <i className="fas fa-question-circle me-2"></i> FAQs
</Link>
</nav>

<div className="logout-section pb-4">
<button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
    <i className="fas fa-sign-out-alt me-2"></i> Log Out
</button>
</div>
*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeart, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../SideNav.css';

function SideNav({ isOpen, toggleSideNav }) {
    const location = useLocation();

    return (
        <>
            <div className={`sidenav ${isOpen ? 'd-block side-nav-open' : 'd-none'} d-lg-block`}>
                <div className="side-nav-content" onClick={isOpen && toggleSideNav}>
                    
                    {/* Profile Section */}
                    <div className="profile-section">
                        <div className="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic rounded-circle me-3" />
                            <div className="flex-grow-1">
                                <h6 className="profile-name mb-0">John Doe</h6>
                            </div>
                            <FontAwesomeIcon icon={faEdit} className="text-muted edit-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-1">
                                    <FontAwesomeIcon icon={faStar} className="fa-fw me-3 pe-4"/> 
                                <span>Stars</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <FontAwesomeIcon icon={faAward} className="fa-fw me-3 pe-4"/>
                               <span>Badges</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <hr className="section-divider mb-3" />

                    {/* Links Section */}
                    <div className="section">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faUsers} className="fa-fw me-3 pe-4"/>                          
                            Community List
                        </Link>
                        <Link to="/personal-list" className={`nav-link ${location.pathname === '/personal-list' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faHeart} className="fa-fw me-3 pe-4"/>
                            Personal List
                        </Link>
                        <Link to="/faqs" className={`nav-link ${location.pathname === '/faqs' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faQuestionCircle} className="fa-fw me-3 pe-4"/> 
                            FAQs
                        </Link>
                    </div>

                    {/* Logout Button at the bottom */}
                    <div className="logout-section">
                        <button className="btn btn-link text-danger" onClick={toggleSideNav}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="me-3 fa-fw pe-4"/> Logout
                        </button>
                    </div>
                </div>
            </div>  

            {isOpen && <div className="overlay" onClick={toggleSideNav}></div>}
        </>
    );
}

export default SideNav;
