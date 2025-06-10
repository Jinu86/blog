import React, { useState } from 'react';

function CommentForm({ postId, onCommentSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;
    
    const newComment = {
      id: Date.now(),
      author,
      content,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    onCommentSubmit(newComment);
    setAuthor('');
    setContent('');
  };

  return (
    <div className="comment-form">
      <h3>댓글 작성</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">이름</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">댓글 작성</button>
      </form>
    </div>
  );
}

export default CommentForm; 