import React, { useState } from 'react';
import PostList from '../components/PostList';
import postsData from '../data/posts';

function MainPage() {
  const [posts, setPosts] = useState(postsData);
  
  return (
    <div className="main-page">
      <h2>최신 글</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default MainPage; 