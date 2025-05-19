import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import { RootState, AppDispatch } from '../store';

function Posts() {
  const { posts } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded cursor-pointer hover:bg-gray-100" onClick={() => window.location.href = `/post/${post.id}`}>
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
            <h3 className="font-bold">{post.title}</h3>
            <p>published at: {new Date().toLocaleDateString()}</p>
            <p>{post.body.substring(0, 50)}...</p>
            <p className="text-blue-600">readmore...</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Posts;