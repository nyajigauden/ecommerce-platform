import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the auth token from local storage
    localStorage.removeItem('authToken');

    // Optionally, clear any user state if using Context API or Redux

    // Redirect to login page or home page
    navigate('/login'); // Adjust the route as needed
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
