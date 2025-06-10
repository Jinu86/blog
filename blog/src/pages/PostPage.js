import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import postsData from '../data/posts';

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 애플리케이션에서는 API 호출을 통해 데이터를 가져옵니다
    const foundPost = postsData.find(p => p.id === parseInt(postId));
    setPost(foundPost);
    setLoading(false);
  }, [postId]);

  const handleCommentSubmit = (newComment) => {
    setPost(prevPost => ({
      ...prevPost,
      comments: [...prevPost.comments, newComment]
    }));
  };

  if (loading) return <div>로딩 중...</div>;
  if (!post) return <div>포스트를 찾을 수 없습니다.</div>;

  return (
    <div className="post-page">
      <Post post={post} />
      <CommentList comments={post.comments} />
      <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}

export default PostPage; 