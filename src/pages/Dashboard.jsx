import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'

function Dashboard() {
  const { user, email, role, location } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Dashboard</h1>
      <div className="border p-4 mb-6">
        <h2 className="text-xl mb-2">Profile Information</h2>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <p>Name: {user || 'Unknown User'}</p>
            <p>Email: {email || 'No email provided'}</p>
            <p>Designation: {role || 'Software Developer'}</p>
            <p>Location: {location || 'Cairo, EG'}</p>
          </div>
        </div>
        <p className="mt-2 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
      <div className="border p-4">
        <h2 className="text-xl mb-2">Posts/Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="border p-4 rounded hover:shadow-md transition-shadow duration-200">
              {/* <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div> */}
              <h3 className="font-bold">Post headline</h3>
              <p className="text-sm text-gray-500">published at: 6/5/2025</p>
              <p className="my-2">{post.body.substring(0, 30)}...</p>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer">read more</p>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2 ">
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
    </div>
  )
}

export default Dashboard