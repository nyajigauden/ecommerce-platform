import React from 'react';
import { Navigate } from 'react-router-dom';

// This is a simple PrivateRoute component that checks if the user is authenticated
const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if the token exists in localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
