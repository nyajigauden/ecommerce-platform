import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/apiService'; // Import the resetPassword function from apiService
import './ResetPasswordPage.css';

function ResetPasswordPage() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, newPassword, confirmPassword);
      setAlertMessage('Password has been reset successfully.');
      setTimeout(() => {
        setAlertMessage('');
        navigate('/login'); // Redirect to login page after a short delay
      }, 5000); // Wait 5 seconds before redirecting
    } catch (error) {
      setAlertMessage('Error resetting password. Please try again.');
      setTimeout(() => setAlertMessage(''), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <div className="reset-password-page">
      <h1>Reset Password</h1>
      {alertMessage && <div className="alert alert-success">{alertMessage}</div>}
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
