import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <div className="post-info">
            <span className="author">{post.author}</span>
            <span className="date">{post.createdAt}</span>
          </div>
          <p className="post-excerpt">
            {post.content.length > 100 
              ? `${post.content.substring(0, 100)}...` 
              : post.content}
          </p>
          <div className="post-footer">
            <span className="comments-count">댓글 {post.comments.length}개</span>
            <Link to={`/post/${post.id}`} className="read-more">더 보기</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList; 