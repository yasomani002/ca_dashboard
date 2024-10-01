import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const LoginData = JSON.parse(localStorage.getItem('login'))
  let isAuthenticated = false
  if (LoginData?.email === '123@gmail.com' && LoginData?.password === '12345') {
    isAuthenticated = true;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
