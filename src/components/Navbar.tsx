import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { RootState } from '../store';

function Navbar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/Authenticated-Blog-Dashboard" className="text-xl font-bold">Blog Dashboard</Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/Authenticated-Blog-Dashboard/dashboard">Dashboard</Link>
              <Link to="/Authenticated-Blog-Dashboard/posts">Posts</Link>
              <Link to="/Authenticated-Blog-Dashboard/new-post">New Post</Link>
              <button onClick={handleLogout} className="btn">Logout</button>
              
            </>
          ) : (
            <>
              <Link to="/Authenticated-Blog-Dashboard/login" className="mr-4">Login</Link>
              <Link to="/Authenticated-Blog-Dashboard/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;