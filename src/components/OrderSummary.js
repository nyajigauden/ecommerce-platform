import React, { useState, useEffect } from 'react';

function OrderSummary() {
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    // Fetch order summary from API
    fetch('/api/order-summary')
      .then(response => response.json())
      .then(data => setOrderSummary(data));
  }, []);

  if (!orderSummary) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Order ID: {orderSummary.id}</p>
      <p>Order Date: {new Date(orderSummary.orderDate).toLocaleDateString()}</p>
      <p>Status: {orderSummary.status}</p>
      <p>Total Amount: ${orderSummary.totalAmount}</p>
    </div>
  );
}

export default OrderSummary;
