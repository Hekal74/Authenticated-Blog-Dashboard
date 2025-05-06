import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'

function Posts() {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded hover:shadow-md transition-shadow duration-200">
            {/* <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div> */}
            <h3 className="font-bold">Post headline</h3>
            <p className="text-sm text-gray-500">published at: 6/5/2025</p>
            <p className="my-2">{post.body.substring(0, 30)}...</p>
            <p className="text-blue-600 hover:text-blue-800 cursor-pointer">read more...</p>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center space-x-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Posts