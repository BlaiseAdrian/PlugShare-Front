import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';

function ReviewModal({ show, onClose, shop, currentUser }) {
  const { solutions, updateSolution } = useContext(DataContext);

  // Retrieve the solution and check if the current user has flagged it
  const solution = solutions.find((sol) => sol.id === shop.id);
  const hasFlagged = solution?.red_flags.includes(currentUser);
  const [isFlagged, setIsFlagged] = useState(hasFlagged);

  const handleFlagClick = () => {
    if (solution) {
      // Update the red_flags array based on the flag status
      const updatedFlags = isFlagged
        ? solution.red_flags.filter((user) => user !== currentUser) // Remove the user's flag
        : [...solution.red_flags, currentUser]; // Add the user's flag

      // Update the solution in the global context
      const updatedSolution = {
        ...solution,
        red_flags: updatedFlags,
      };

      updateSolution(solution.id, updatedSolution);

      // Update the local state to reflect the new flag status
      setIsFlagged(!isFlagged);
    }
  };

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{shop.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Tap the flag if any of the statements is correct:</p>
            <div className="mb-2" onClick={handleFlagClick} style={{ cursor: 'pointer' }}>
              <span
                className={`me-2 ${isFlagged ? 'text-danger' : 'text-muted'}`}
                role="img"
                aria-label="flag"
                style={{ fontSize: '1.5rem' }}
              >
                &#9873; {/* Flag icon */}
              </span>
              <p>1. The information about this place is misleading or a scam.</p>
              <p>2. The service is terrible and should not be used.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
