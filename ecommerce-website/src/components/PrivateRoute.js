import React from 'react';
import { Navigate } from 'react-router-dom';

// Replace this with your actual authentication check
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
