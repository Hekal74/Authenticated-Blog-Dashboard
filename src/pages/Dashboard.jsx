import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'

function Dashboard() {
  const { user, email } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Dashboard</h1>
      <div className="border p-4 mb-6">
        <h2 className="text-xl mb-2">Profile Info</h2>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <p>Name: {user || 'Unknown User'}</p>
            <p>Email: {email || 'No email provided'}</p>
            <p>Designation: Sr. SWE</p>
            <p>Location: Cairo, EG</p>
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
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
              <h3 className="font-bold">Post headline</h3>
              <p>published at: 12/12/2012</p>
              <p>{post.body.substring(0, 50)}...</p>
              <p className="text-blue-600">readmore...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard