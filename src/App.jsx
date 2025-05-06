import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Signup from './pages/signup'

function App() {
  return (
    <div className="min-h-screen bg-gray-400">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/posts"
          element={<PrivateRoute><Posts /></PrivateRoute>}
        />
        <Route
          path="/new-post"
          element={<PrivateRoute><NewPost /></PrivateRoute>}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
