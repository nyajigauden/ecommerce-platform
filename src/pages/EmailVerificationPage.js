import React, { useState } from 'react';
import { verifyEmail } from '../api/apiService'; // Ensure you have a function for verifying email
import { useNavigate } from 'react-router-dom';
import './EmailVerificationPage.css'; // Ensure you have a CSS file for styles

function EmailVerificationPage() {
  const [token, setToken] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await verifyEmail(token); // Call your verification function
      setAlertMessage('Email verified successfully!');
      setTimeout(() => {
        navigate('/login'); // Redirect to login or another page after success
      }, 2000);
    } catch (error) {
      setAlertMessage('Verification failed. Please check your token and try again.');
      setTimeout(() => setAlertMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="verification-page">
      <h1>Verify Your Email</h1>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleVerification}>
        <div>
          <label htmlFor="token">Verification Token:</label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Verifying...' : 'Verify'}
        </button>
      </form>
    </div>
  );
}

export default EmailVerificationPage;
