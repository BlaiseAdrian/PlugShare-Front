import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './DataContext'; // Access global solutions and update function

function CommentsCard({ date, agreements, comment, solutionId, provider }) {
  const { solutions, updateSolution } = useContext(DataContext); // Assume this is provided
  const currentUser = "CurrentUser"; // Replace with actual user logic
  const [isToggled, setIsToggled] = useState(agreements.includes(currentUser)); // Track if user agrees with the comment


  const handleToggle = () => {
    setIsToggled((prevState) => {
      const newState = !prevState;

      // Find the solution by ID
      const solution = solutions.find((sol) => sol.id === solutionId);

      if (solution) {
        // Update the agreements for the relevant comment
        const updatedComments = solution.comments.map((com) => {
          // Only update agreements for the matching comment
          if (com.comment === comment) {
            const updatedAgreements = newState
              ? [...com.agreements, currentUser] // Add user
              : com.agreements.filter((user) => user !== currentUser); // Remove user

            return { ...com, agreements: updatedAgreements };
          }
          return com;
        });

        // Update the solution with modified comments
        const updatedSolution = {
          ...solution,
          comments: updatedComments,
        };

        updateSolution(solution.id, updatedSolution); // Update globally
      }

      return newState;
    });
  };

  return (
    <div>
      <p className="mx-3">{date}</p>
      <div className="details mx-3 p-2 d-block bg-dark text-light">
        {comment}
        {provider && <span className="badge bg-success ms-2">Provider</span>}
      </div>

      <div className="d-flex align-items-center">
        <div
          className="d-flex ps-3 mx-3 mt-1"
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          <FontAwesomeIcon
            icon={faHandshake}
            className="fa-fw me-1 mt-1"
            style={{ color: isToggled ? 'blue' : 'black' }}
          />
          <p style={{ color: 'blue' }}>{agreements.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentsCard;

