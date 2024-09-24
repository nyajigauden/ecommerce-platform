import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/apiService';
import './ResetPasswordPage.css';

function ResetPasswordPage() {
  const [token, setToken] = useState(''); // State for the token
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setTimeout(() => setAlertMessage(''), 5000);
      return;
    }

    try {
      // Call resetPassword with the token and the new password
      await resetPassword(token, newPassword, confirmPassword);
      setAlertMessage('Password has been reset successfully.');
      setTimeout(() => {
        setAlertMessage('');
        navigate('/login'); // Redirect to login page after a short delay
      }, 5000);
    } catch (error) {
      setAlertMessage('Error resetting password. Please try again.');
      setTimeout(() => setAlertMessage(''), 5000);
    }
  };

  return (
    <div className="reset-password-page">
      <h1>Reset Password</h1>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="token">Token:</label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
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
