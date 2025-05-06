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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/Authenticated-Blog-Dashboard/login" element={<Login />} />
        <Route path="/Authenticated-Blog-Dashboard/signup" element={<Signup />} />
        <Route
          path="/Authenticated-Blog-Dashboard/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/Authenticated-Blog-Dashboard/posts"
          element={<PrivateRoute><Posts /></PrivateRoute>}
        />
        <Route
          path="/Authenticated-Blog-Dashboard/new-post"
          element={<PrivateRoute><NewPost /></PrivateRoute>}
        />
        <Route path="/Authenticated-Blog-Dashboard" element={<Navigate to="/Authenticated-Blog-Dashboard/login" />} />
      </Routes>
    </div>
  )
}

export default App
