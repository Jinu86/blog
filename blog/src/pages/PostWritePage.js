import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import postsData from '../data/posts';

function PostWritePage() {
  const navigate = useNavigate();

  const handlePostSubmit = (newPost) => {
    // 실제 애플리케이션에서는 API 호출을 통해 데이터를 저장합니다
    postsData.unshift(newPost);
    navigate('/');
  };

  return (
    <div className="post-write-page">
      <PostForm onPostSubmit={handlePostSubmit} />
    </div>
  );
}

export default PostWritePage; 