import React, { useContext, useEffect, useState } from 'react';
import ReviewModal from './ReviewForm';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsCard from './Comments';
import { DataContext } from './DataContext';
import AddCommentModal from './AddCommentModal';
import SolutionForm from './AddSolutionCard';

function SolutionsDetailsCard({ solution, main }) {
  const { solutions, updateSolution, forFeedback, updateCurrentSoln, currentSoln } = useContext(DataContext);
  const [shop, setShop] = useState(solution || currentSoln || {});

  updateCurrentSoln(solution);
  //console.log(shop, currentSoln);
  
  const { name, location, red_flags, contacts, catalogue, email, comments, id, endorsers, provider } = shop;
  const [showModal, setShowModal] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showSolutionModal, setShowSolutionModal] =useState(false);
  const [showContacts, setShowContacts] = useState(false); // New state for contacts visibility
  const currentUser = 'currentUser';

  const [shouldAddFeedback, setShouldAddFeedback] = useState(false);

  useEffect(() => {
    setShop(solutions.find(shop => shop.id === solution.id));
  }, [solutions, currentSoln]); // Recompute shop whenever data changes


  const handleShowContacts = () => {
    setShowContacts(true); // Show the contacts
    setShouldAddFeedback(true); // Trigger feedback addition in useEffect
    addsolnFeedback(shop);
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
      name: soln.name,
    }
    forFeedback(text);
  };  

  const getAlternatives = (shops, solutionId) => {
    const solution = shops.find(shop => shop.id === solutionId);
    return solution && solution.alternatives
      ? shops.filter(shop => solution.alternatives.includes(shop.id))
      : [];
  };

  const alternatives = getAlternatives(solutions, id);

  const toggleCommentsView = () => {
    setShowAllComments(prevState => !prevState);
  };


  const providerComment = comments.find(comment =>
    comment.owner === provider
  );

  const otherComments = comments.filter(
    comment => comment.owner != provider
  );

  return (
    <div className="card mx-3" style={{ minHeight: '85vh' }}>
      <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
  <h5 className="card-title mb-0">{name}</h5>

  {shop.provider === currentUser ? (
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
        shopName={name}
        shopCatalogue={catalogue}
        shopContacts={contacts}
        address={location}
        shopEmail={email}
        shopDetails={providerComment.comment}
        id={id}
        currentUser={currentUser}
        fullSoln={solution}
      />
    </>
  ) : (
    // Render the Flag button for other users
    <>
      <button
        className="btn"
        style={{
          backgroundColor: shop.red_flags.includes(currentUser) ? 'red' : 'blue',
          color: 'white',
        }}
        onClick={() => setShowModal(true)}
      >
        {shop.red_flags.includes(currentUser) ? 'Flagged' : 'Flag it'}
      </button>
      <ReviewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        shop={shop}
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
              <strong>Red Flags:</strong> {red_flags.length}
              <span
                className="me-2 text-muted"
                role="img"
                aria-label="flag"
                style={{ fontSize: '1rem', color: 'red' }}
              >
                &#9873;
              </span>
            </p>
            <p className="card-text">
              <strong>Endorsements:</strong> {endorsers.join(', ')}
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
                  <strong>Contacts:</strong> {contacts}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {email}
                </p>
              </>
            )}
            
            <p className="card-text">
              <strong>Comments:</strong>
            </p>
            {providerComment && (
              <CommentsCard solutionId={id} {...providerComment} />
            )}
            <p
              onClick={toggleCommentsView}
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
            >
              See All...
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