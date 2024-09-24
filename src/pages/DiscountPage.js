// src/pages/DiscountPage.js
import React from 'react';
import DiscountList from '../components/DiscountList'; // Import the DiscountList component
import './DiscountPage.css'; // Import CSS for styling

function DiscountPage() {
  return (
    <div className="discount-page">
      <h1>Discount Page</h1>
      <DiscountList />
    </div>
  );
}

export default DiscountPage;