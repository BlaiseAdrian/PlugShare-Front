import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import PersonalList from './components/PersonalList'; 
import FAQ from './components/FAQs';
import CommunityPlugs from './components/CommunityPlugs';
import SideNav from './components/SideNav';
import SolutionsDetails from './components/SolutionsDetails';
import NeedsDetails from './components/NeedsDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CommunityNeeds from './components/CommunityNeeds';
import Solutions from './components/Solutions';

function App() {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
      setSideNavOpen(!isSideNavOpen);
  };

  return (
    <Router>
      <div className='row g-0'>
        <div className='col-0 col-lg-3'> 
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />     
        </div>

        <div className='col-12 col-lg-9'>
            
                    
            <Navbar className='row g-0' toggleSideNav={toggleSideNav}/>
            <div className='row g-0 overflow-auto' style={{maxHeight: "85vh"}}>
              <Routes>
                <Route path="/" element={<CommunityNeeds/>} />
                <Route path="/community-plugs" element={<CommunityPlugs/>} />
                <Route path="/personal-list" element={<PersonalList/>} />
                <Route path="/faqs" element={<FAQ/>} />
                <Route path="/Solutions" element={<Solutions/>} />
                <Route path="/SolutionsDetails" element={<SolutionsDetails/>} />
                <Route path="/NeedsDetails" element={<NeedsDetails/>} />
              </Routes>
            </div>

        </div>
      </div>
          
    </Router>
  );
}

export default App;

