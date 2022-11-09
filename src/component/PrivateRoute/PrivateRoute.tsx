import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isLogin } = useAuth();
  const location = useLocation();

  if (!isLogin()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}