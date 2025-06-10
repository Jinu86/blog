import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-info">
        <span className="author">{post.author}</span>
        <span className="date">{post.createdAt}</span>
      </div>
      <div className="post-content">{post.content}</div>
    </div>
  );
}

export default Post; 