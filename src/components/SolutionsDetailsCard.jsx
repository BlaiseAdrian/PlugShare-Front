import React, { useContext, useEffect, useState } from 'react';
import ReviewModal from './ReviewForm';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsCard from './Comments';
import { DataContext } from './DataContext';
import AddCommentModal from './AddCommentModal';
import SolutionForm from './AddSolutionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

function SolutionsDetailsCard({ solution, main }) {
  const { solutions, updateSolution, forFeedback, updateCurrentSoln, currentSoln } = useContext(DataContext);
  
  updateCurrentSoln(solution);
  //console.log(shop, currentSoln);
  
  const { business_name, location, flags, phone_number, handshakes, details, catalogue = '', email, comments = [], _id, endorsements, user_id } = solution;
  const [showModal, setShowModal] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showSolutionModal, setShowSolutionModal] =useState(false);
  const [showContacts, setShowContacts] = useState(false); // New state for contacts visibility
  const currentUser = 'currentUser';
  const [isToggled, setIsToggled] = useState(handshakes.includes(currentUser));
  const [shouldAddFeedback, setShouldAddFeedback] = useState(false);


  const handleShowContacts = () => {
    setShowContacts(true); // Show the contacts
    setShouldAddFeedback(true); // Trigger feedback addition in useEffect
    addsolnFeedback(solution);
  };  

  const [showAddCommentModal, setShowAddCommentModal] = useState(false);

  const addComment = (comment) => {
    const updatedSolution = {
      ...solution,
      comments: [...solution.comments, comment],
    };
    updateSolution(solution.id, updatedSolution);
  };

  const addsolnFeedback = (soln) => {
    const text = {
      user: currentUser,
      id: soln.id,
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
      name: soln.business_name,
    }
    forFeedback(text);
  };  

  const toggleCommentsView = () => {
    setShowAllComments(prevState => !prevState);
  };


  const providerComment = comments.find(comment =>
    comment.owner === user_id
  );

  const otherComments = comments.filter(
    comment => comment.owner != user_id
  );

  return (
    <div className="card mx-3" style={{ minHeight: '85vh' }}>
      <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
  <h5 className="card-title mb-0">{business_name}</h5>

  {user_id === currentUser ? (
    // Render the Edit button only if the current user is the solution provider
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShowSolutionModal(true)}
      >
        Edit
      </button>
      <SolutionForm
        show={showSolutionModal}
        onClose={() => setShowSolutionModal(false)}
        shopName={business_name}
        shopCatalogue={catalogue}
        shopContacts={phone_number}
        address={location}
        shopEmail={email}
        shopDetails={providerComment.comment}
        id={_id}
        currentUser={currentUser}
        fullSoln={solution}
      />
    </>
  ) : (
    // Render the Flag button for other users
    <>
    <div className="d-flex align-items-center">
      <FontAwesomeIcon
        icon={faHandshake}
        className="fa-fw me-3"
        style={{ fontSize: '25px', color: isToggled ? 'blue' : 'black' }}
      />
      <span
        className="mx-2 text-muted"
        role="img"
        aria-label="flag"
        style={{ fontSize: '25px', color: flags.includes(currentUser) ? 'red' : 'red' }}
      >
        &#9873;
      </span>

    </div>
      
      <ReviewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        shop={solution}
        currentUser={currentUser}
      />
    </>
  )}
</div>

        {/* <Link
          to="/SolutionAlternatives"
          className={`${main ? 'd-block' : 'd-none'}`}
          state={{ alternatives, name }}
          style={{ textDecoration: 'none' }}
        >
          See Alternatives <span style={{ color: 'red' }}>({alternatives.length})</span>
        </Link>  */}
        <hr />
        {!showAllComments ? (
          <div className="full-data">
            <p className="card-text">
              <strong>Red Flags:</strong> {flags.length}
            </p>
            <p className="card-text">
              <strong>Endorsements:</strong> {endorsements.join(', ')}
            </p>
            <p className="card-text">
              <strong>Handshakes:</strong> {handshakes.length}
            </p>
            <p className="card-text">
              <strong>Locations:</strong> {Array.isArray(location) ? location.join(', ') : location}
            </p>
            <p className="card-text">
              <strong>Catalogue:</strong> <a href={catalogue}>{catalogue}</a>
            </p>
            {!showContacts ? (
              <p style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                className="card-text"
                onClick={handleShowContacts}
              >
                See contacts and email
              </p>
            ) : (
              <>
                <p className="card-text">
                  <strong>Contacts:</strong> {phone_number}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {email}
                </p>
              </>
            )}
            
            <p className="card-text">
              <strong>Details:</strong>
            </p>
            <div className="details mb-3 p-2 d-block bg-dark text-light overflow-auto" style={{maxHeight: '35vh'  }}>
                    {details}
            </div>
            <p className="card-text">
              <strong>Comments:</strong>
              <span 
              className='ms-2'
              onClick={toggleCommentsView}
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                {comments.length}
              </span>
            </p>
          </div>
        ) : (
          <div className="comments">
            <div className="d-flex justify-content-between align-items-center">
              <p
                onClick={toggleCommentsView}
                style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Back
              </p>
              <button
          className="btn btn-primary mb-3"
          onClick={() => setShowAddCommentModal(true)}
        >
          Add Comment
        </button>
              <AddCommentModal
          show={showAddCommentModal}
          onClose={() => setShowAddCommentModal(false)}
          addComment={addComment}
          currentUser={currentUser}
        />
            </div>
            <div className="overflow-auto" style={{ maxHeight: '50vh' }}>
              {providerComment && (
                <>
                  <h5>Solution Provider's Comment:</h5>
                  <CommentsCard solutionId={id} {...providerComment} />
                  <hr />
                </>
              )}
              <h5>Other helpful comments</h5>
              {otherComments.map((comment, index) => (
                <CommentsCard solutionId={id} {...comment} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolutionsDetailsCard; 