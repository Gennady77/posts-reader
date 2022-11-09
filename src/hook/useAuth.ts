import { useContext } from 'react';
import { AuthContext } from '../component/Contexts/AuthContext/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};