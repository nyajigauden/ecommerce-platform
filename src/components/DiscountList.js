// src/components/DiscountList.js
import React, { useState } from 'react';
import './DiscountList.css';

function DiscountList() {
  const [discounts] = useState([
    { id: 1, code: 'SUMMER20', description: '20% off on summer items', discountAmount: 20, expirationDate: '2024-12-31' },
    { id: 2, code: 'WINTER10', description: '10% off on winter items', discountAmount: 10, expirationDate: '2024-06-30' }
  ]);

  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDiscounts((prevSelected) =>
      checked ? [...prevSelected, value] : prevSelected.filter((id) => id !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Discount List submitted successfully!');
    setSelectedDiscounts([]); // Clear selected discounts
    setTimeout(() => {
      setMessage(''); // Clear message after 3 seconds
    }, 3000);
  };

  return (
    <div className="discount-list">
      <h2>Discount List</h2>
      <ul>
        {discounts.map((discount) => (
          <li key={discount.id}>
            <input
              type="checkbox"
              value={discount.id}
              checked={selectedDiscounts.includes(discount.id.toString())}
              onChange={handleChange}
            />
            <label>
              <h3>{discount.code}</h3>
              <p>{discount.description}</p>
              <p>Discount: {discount.discountAmount}%</p>
              <p>Expires on: {discount.expirationDate}</p>
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {message && <div className="alert">{message}</div>} {/* Display message if it exists */}
    </div>
  );
}

export default DiscountList;
