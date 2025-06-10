import React, { useState } from 'react';

function PostForm({ onPostSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) return;
    
    const newPost = {
      id: Date.now(),
      title,
      content,
      author,
      createdAt: new Date().toISOString().split('T')[0],
      comments: []
    };
    
    onPostSubmit(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="post-form">
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">작성자</label>
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
            rows="10"
          />
        </div>
        <button type="submit" className="btn">글 작성</button>
      </form>
    </div>
  );
}

export default PostForm; 