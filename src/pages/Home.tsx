import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to the Dashboard Blog!</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          This is your central hub for sharing and discovering insightful blog posts.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link 
            to="/login" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
        <div className="mt-8">
          <h5 className="text-xl font-semibold text-gray-800 mb-4">What you can do:</h5>
          <ul className="space-y-3 text-gray-600 list-disc list-inside">
            <li>Create  your blog posts</li>
            <li>Read interesting content from other users</li>
            <li>Interact with the blogging community</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home