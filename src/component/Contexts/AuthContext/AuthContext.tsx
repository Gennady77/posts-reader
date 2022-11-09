import { createContext, PropsWithChildren, useState } from 'react';
import { AuthContextInterface, RegisterResponseInterface } from '../../../model/interface';
import { useApi } from '../../../hook/useApi';
import { TOKEN_KEY } from '../../../model/constants';

export const AuthContext = createContext<AuthContextInterface>({
  register: () => Promise.resolve(),
  isLogin: () => false,
});

export function AuthContextProvider({ children }: PropsWithChildren) {
  const clientId = 'ju16a6m81mhid5ue1z3v2g0uh';
  const [slToken, setSlToken] = useState('');

  const registerRequest = useApi<RegisterResponseInterface>('register');

  function register(name: string, email: string, controller?: AbortController) {
    const params = {
      client_id: clientId,
      email,
      name,
    };

    return registerRequest(params).then((response) => {
      if(response.data) {
        localStorage.setItem(TOKEN_KEY, response.data.sl_token);
        setSlToken(response.data.sl_token);
      }
    });
  }

  function isLogin() {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  const context = {
    register,
    isLogin,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}