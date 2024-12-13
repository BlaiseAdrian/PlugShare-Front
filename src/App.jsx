import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from './components/Navbar'; 
import PersonalList from './components/PersonalList'; 
import FAQ from './components/FAQs';
import CommunityPlugs from './components/CommunityPlugs';
import SideNav from './components/SideNav';
import SolutionsDetails from './components/SolutionsDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CommunityNeeds from './components/CommunityNeeds';
import Solutions from './components/Solutions';
import CommunityNeedsDetails from './components/CommunityNeedsDetails';
import PersonalNeedsDetails from './components/PersonalNeedsDetails';
import SolutionAlternatives from './components/SolutionAlternatives';
import Endorsers from './components/Endorsers';
import MyEndorsements from './components/MyEndorsements';
import EndorsementSolutionDetails from './components/EndorsementSolutionsDetails';
import AlternativesDetails from './components/AlternativesDetails';
import Plugs from './components/Plugs';
import PlugDetails from './components/PlugDetails';
import { DataContext } from './components/DataContext';

function App() {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
      setSideNavOpen(!isSideNavOpen);
  };


  const { data, solutions, removeItem } = useContext(DataContext);

  return (
    <Router>
      <div className='row g-0'>
        <div className='col-0 col-lg-3'> 
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />     
        </div>

        <div className='col-12 col-lg-9'>           
            <Navbar className='row g-0' toggleSideNav={toggleSideNav}/>
            <div className='row g-0 overflow-auto' style={{maxHeight: "85vh"}}>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={location.pathname} // Ensure unique key for each route
                    classNames="slide"
                    timeout={300}
                >
              <Routes>
                <Route path="/" element={<CommunityNeeds needs={data}/>} />
                <Route path="/personal-list" element={<PersonalList  needs={data}/>} />
                <Route path="/faqs" element={<FAQ/>} />
                <Route path="/Solutions" element={<Solutions/>} />
                <Route path="/Plugs" element={<Plugs shops={solutions}/>} />
                <Route path="/Endorsers" element={<Endorsers/>} />
                <Route path="/MyEndorsements" element={<MyEndorsements/>} />
                <Route path="/EndorsementSolutionsDetails" element={<EndorsementSolutionDetails/>} />
                <Route path="/SolutionsDetails" element={<SolutionsDetails shops={solutions}/>} />
                <Route path="/PlugDetails" element={<PlugDetails/>} />
                <Route path="/PersonalNeedsDetails" element={<PersonalNeedsDetails/>} />
                <Route path="/SolutionAlternatives" element={<SolutionAlternatives/>} />
                <Route path="/AlternativesDetails" element={<AlternativesDetails/>} />
                <Route path="/CommunityNeedsDetails" element={<CommunityNeedsDetails/>} />
              </Routes>
                </CSSTransition>
            </SwitchTransition>
            </div>

        </div>
      </div>
          
    </Router>
  );
}

export default App;

