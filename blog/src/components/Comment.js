import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-info">
        <span className="author">{comment.author}</span>
        <span className="date">{comment.createdAt}</span>
      </div>
      <p className="comment-content">{comment.content}</p>
    </div>
  );
}

export default Comment; 