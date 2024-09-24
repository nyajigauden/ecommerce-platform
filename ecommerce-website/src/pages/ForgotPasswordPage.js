import React, { useState } from 'react';
import { forgotPassword } from '../api/apiService'; // Import the forgotPassword function from apiService
import './ForgotPasswordPage.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setAlertMessage('Check your email for a password reset link.');
      setTimeout(() => setAlertMessage(''), 5000); // Clear message after 5 seconds
    } catch (error) {
      setAlertMessage('Error sending password reset request. Please try again.');
      setTimeout(() => setAlertMessage(''), 5000); // Clear message after 5 seconds
    }
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
