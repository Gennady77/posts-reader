import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();

  function onLoginClickHandler() {
    navigate('/login', { replace: true });
  }

  return (
    <div className="ErrorPage">
      Your session has already expired.
      <span onClick={onLoginClickHandler} className="ErrorPage__loginLink">Login</span> again, please.
    </div>
  );
}
