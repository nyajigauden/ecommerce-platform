// src/components/AddressForm.js
import React, { useState } from 'react';
import './AddressForm.css';

function AddressForm() {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="address-form">
      <h2>Address Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressForm;
