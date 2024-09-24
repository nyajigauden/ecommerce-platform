// src/components/PaymentForm.js
import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Completed'); // Default status
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate submission
    setMessage('Payment submitted successfully!');
    
    // Clear form fields
    setPaymentMethod('');
    setPaymentDate('');
    setAmount('');
    setStatus('Completed');

    // Hide message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            {/* Add more payment methods if needed */}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      {message && <div className="alert">{message}</div>}
    </div>
  );
}

export default PaymentForm;
