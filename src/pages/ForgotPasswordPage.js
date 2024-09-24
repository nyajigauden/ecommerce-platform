import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../api/apiService'; // Import the forgotPassword function from apiService
import './ForgotPasswordPage.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Clear any previous alert message
    setAlertMessage('');

    try {
      await forgotPassword(email);
      setAlertMessage('Check your email for a password reset link.');

      // Redirect to ResetPasswordPage after 2 seconds
      setTimeout(() => {
        navigate(`/reset-password/${email}`); // Assuming the reset link will have the token in the URL
      }, 2000);
    } catch (error) {
      console.error('Error during password reset request:', error); // Log the error for debugging
      setAlertMessage('Error sending password reset request. Please try again.');
    }

    // Clear the alert message after 5 seconds
    setTimeout(() => setAlertMessage(''), 5000);
  };

  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      {alertMessage && <div className="alert alert-info">{alertMessage}</div>}
      <form onSubmit={handleForgotPassword}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
