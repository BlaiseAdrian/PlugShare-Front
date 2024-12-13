import React, { useState } from 'react';

function AddCommentModal({ show, onClose, addComment, currentUser }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: commentText,
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
      owner: currentUser,
      agreements: [],
    };
    
    addComment(newComment);
    setCommentText('');
    onClose();
  };

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a Comment</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Comment Input */}
              <div className="mb-3">
                <label className="form-label">Your Comment</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Enter your comment..."
                  required
                ></textarea>
              </div>

              {/* Footer Buttons */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Discard
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCommentModal;
