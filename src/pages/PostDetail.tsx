import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import { RootState, AppDispatch } from '../store';

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { posts } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const post = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!posts.length) dispatch(fetchPosts());
  }, [dispatch, posts.length]);

  if (!post) return <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">{post.title}</h1>
      <p className="mb-4">Published at: {new Date(post.createdAt!).toLocaleString()}</p>
      <p className="mb-4">{post.body}</p>
      <p className="text-gray-600">Author: {post.userId === 1 ? 'Current User' : 'Unknown'}</p>
    </div>
  );
}

export default PostDetail;