import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'

function Posts() {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Posts</h1>
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
      <div className="mt-4 flex justify-center space-x-2">
        <button className="px-3 py-1 bg-gray-200 rounded">1</button>
        <button className="px-3 py-1 bg-gray-200 rounded">2</button>
        <button className="px-3 py-1 bg-gray-200 rounded">3</button>
        <button className="px-3 py-1 bg-gray-200 rounded">4</button>
        <button className="px-3 py-1 bg-gray-200 rounded">5</button>
      </div>
    </div>
  )
}

export default Posts