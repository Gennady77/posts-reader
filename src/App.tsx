import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './component/Page/Login/LoginPage';
import { PostPage } from './component/Page/Post/PostPage';
import { PrivateRoute } from './component/PrivateRoute/PrivateRoute';
import { AuthContextProvider } from './component/Contexts/AuthContext/AuthContext';
import { PostsContextProvider } from './component/Contexts/PostsContext/PostsContext';
import { ErrorPage } from './component/Page/Error/ErrorPage';

function App() {
  window.onunhandledrejection = event => {
    console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason.message}`);
    event.preventDefault();
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PostsContextProvider>

            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/:fromId" element={
                <PrivateRoute>
                  <PostPage />
                </PrivateRoute>
              } />
              <Route path="/" element={
                <PrivateRoute>
                  <PostPage />
                </PrivateRoute>
              } />
            </Routes>

        </PostsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
