// src/components/AddressForm.js

import React, { useState } from 'react';
import { addAddress } from '../api/apiService';
import './AddressForm.css';

const AddressForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await addAddress(street, city, postalCode, country);
      setMessage('Address added successfully!');
      // Clear form fields after successful submission
      setStreet('');
      setCity('');
      setPostalCode('');
      setCountry('');
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('Failed to add address. Please try again.');
    }
  };

  return (
    <div className="address-form">
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input 
            id="street"
            type="text" 
            value={street} 
            onChange={(e) => setStreet(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input 
            id="city"
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input 
            id="postalCode"
            type="text" 
            value={postalCode} 
            onChange={(e) => setPostalCode(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input 
            id="country"
            type="text" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Address</button>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default AddressForm;
