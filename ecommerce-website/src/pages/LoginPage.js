import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/apiService'; // Import the login function from apiService
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/'); // Redirect to home page
    } catch (error) {
      setAlertMessage('Login failed. Please check your credentials and try again.');
      setTimeout(() => setAlertMessage(''), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="login-footer">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}

export default LoginPage;
