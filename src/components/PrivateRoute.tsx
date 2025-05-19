import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;