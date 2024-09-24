import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/apiService'; // Adjust the relative path to apiService
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is being submitted
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    try {
      await login(username, password);
      setUsername(''); // Clear username field
      setPassword(''); // Clear password field
      setAlertMessage('Login successful! Redirecting...');
      setTimeout(() => {
        setAlertMessage(''); // Clear the alert message
        navigate('/user-profile'); // Redirect to user profile page
      }, 2000); // Adjust timeout as needed
    } catch (error) {
      setAlertMessage('Login failed. Please check your credentials and try again.');
      setTimeout(() => setAlertMessage(''), 5000); // Clear message after 5 seconds
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isSubmitting} // Disable input during submission
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
            disabled={isSubmitting} // Disable input during submission
          />
        </div>
        <button type="submit" disabled={isSubmitting}>Login</button>
      </form>
      <div className="login-footer">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="login-footer">
        <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default LoginPage;
