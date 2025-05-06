import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return isAuthenticated ? children : <Navigate to="/Authenticated-Blog-Dashboard/login" />
}

export default PrivateRoute