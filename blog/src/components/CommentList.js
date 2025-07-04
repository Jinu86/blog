import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3>댓글 ({comments.length})</h3>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList; 