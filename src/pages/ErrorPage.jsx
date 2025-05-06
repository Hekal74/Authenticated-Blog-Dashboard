import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Path don't found!</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          you can redirect to the blog dashboard from here.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link 
            to="/Authenticated-Blog-Dashboard/login" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </Link>
          <Link 
            to="/Authenticated-Blog-Dashboard/signup" 
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home