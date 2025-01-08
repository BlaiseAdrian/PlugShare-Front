import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faTimes, faHandshake, faBullhorn } from '@fortawesome/free-solid-svg-icons';


const CardComponent = ({ item, onHelpful, onUnhelpful, onFlagClick, onEndorse }) => {
  const { name, date } = item;

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text ms-3">
          <strong>Date:</strong> {date}
        </p>
        <div
          className="d-flex overflow-auto ms-3"
          style={{ maxWidth: '75vw', paddingBottom: '5px' }}
        >
          <button className="feedback-button d-flex align-items-center" onClick={onHelpful}>
            <FontAwesomeIcon icon={faHandshake} className="fa-fw pe-1" />
            Helpful
          </button>
          <button className="feedback-button d-flex align-items-center" onClick={onUnhelpful}>
            <FontAwesomeIcon icon={faTimes} className="fa-fw pe-1" />
            Unhelpful
          </button>
          <button className="feedback-button d-flex align-items-center" onClick={onFlagClick}>
            <FontAwesomeIcon icon={faFlag} className="fa-fw pe-1" />
            Flag
          </button>
          {/*<button className="feedback-button d-flex align-items-center" onClick={onEndorse}>
            <FontAwesomeIcon icon={faBullhorn} className="fa-fw pe-1" />
            Endorse
          </button> */}
        </div>
      </div>
    </div>
  );
};


const ListDisplayForm = ({ onClose, displayItems, setDisplayItems }) => {
  const { solutions, updateSolution, removeForFeedback } = useContext(DataContext); // Get data from context

  const unhelpful = (id) => {
    const remainingItems = displayItems.filter((item) => item.id !== id);
    setDisplayItems(remainingItems);
    removeForFeedback(id);
  
    // Close modal if no items remain
    if (remainingItems.length === 0) {
      onClose();
    }
  };
  

  const handleFlagClick = (id) => {
    const solution = solutions.find((sol) => sol.id === id);
  
    if (solution) {
      const currentUser = "currentUser"; // Replace with actual user logic
      const isFlagged = solution.red_flags.includes(currentUser);
  
      // Toggle the red_flags array
      const updatedFlags = isFlagged
        ? solution.red_flags
        : [...solution.red_flags, currentUser]; // Add the flag
  
      const updatedSolution = { ...solution, red_flags: updatedFlags };
      
      // Update the solution globally
      updateSolution(solution.id, updatedSolution);
  
      // Remove flagged solution from the list and close modal if empty
      const remainingItems = displayItems.filter((item) => item.id !== id);
      setDisplayItems(remainingItems);
      removeForFeedback(id);
      if (remainingItems.length === 0) {
        onClose();
      }
    }
  };
  


  const helpful = (solutionId) => {
    const solution = solutions.find((sol) => sol.id === solutionId);
    
    if (solution) {
      const currentUser = "currentUser"; // Replace with actual user logic
      const comment = solution.comments.find((com) => com.owner === solution.provider);
      
      if (comment) {
        const isAgreed = comment.agreements.includes(currentUser);
  
        // Toggle the user's agreement
        const updatedAgreements = isAgreed
          ? comment.agreements // Leave user
          : [...comment.agreements, currentUser]; // Add user
  
        const updatedComments = solution.comments.map((com) =>
          com.owner === solution.provider
            ? { ...com, agreements: updatedAgreements }
            : com
        );
  
        const updatedSolution = { ...solution, comments: updatedComments };
  
        // Update the solution globally
        updateSolution(solution.id, updatedSolution);
  
        // Optionally remove item from display and close modal if empty
        const remainingItems = displayItems.filter((item) => item.id !== solutionId);
        setDisplayItems(remainingItems);
        removeForFeedback(solutionId);
  
        if (remainingItems.length === 0) {
          onClose();
        }
      }
    }
  };
  

  return (
    <div className="container">
      <h6 className="mb-3">Let us know if the following helped you find what you were looking for;</h6>
      <hr />
      <div className="d-flex flex-wrap justify-content-center overflow-auto" style={{ maxHeight: '75vh', paddingRight: '10px' }}> {/*Option to put link to go to solution details, back to form */}
        {displayItems.map((item) => (
          <CardComponent
          key={item.id}
          item={item}
          onHelpful={() => helpful(item.id)} // Pass the `helpful` handler
          onUnhelpful={() => unhelpful(item.id)} // Pass the `unhelpful` handler
          onFlagClick={() => handleFlagClick(item.id)} // Pass the `flag` handler
          onEndorse={() => endorse(item.id)} // Pass the `endorse` handler
        />        
        ))}
      </div>
    </div>
  );
};

const SolutionFeedbackForm = ({ show, onClose, currentUser }) => {
    const { solnFeedback, solutions } = useContext(DataContext); // Get data from context
    const [displayItems, setDisplayItems] = useState(solnFeedback.map((item) => ({ ...item }))); // Create a local array with IDs
  
  return (
    <div className={`modal ${show && displayItems != '' ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5 className="modal-title">Solution Feedback</h5>
            <p type="button" onClick={onClose} style={{color: 'blue'}}>Later</p>
          </div>
          <div className="modal-body">
            <ListDisplayForm onClose={onClose} displayItems={displayItems} setDisplayItems={setDisplayItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFeedbackForm;
