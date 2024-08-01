import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const LoginData = JSON.parse(localStorage.getItem('login'))
  let isAuthenticated = false
  if (LoginData?.email === '123@gmail.com' && LoginData?.password === '12345') {
    isAuthenticated = true;
  }
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
