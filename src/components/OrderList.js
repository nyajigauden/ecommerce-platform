import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/apiService'; // Assuming you have this API function

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await fetchOrders(); // Fetch the list of orders
        setOrders(response);
      } catch (error) {
        setError('Failed to load orders');
      }
    }
    loadOrders();
  }, []);

  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      {error && <div className="alert error">{error}</div>}
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
            <p>Total Amount: ${order.totalAmount}</p>
            <p>Status: {order.status}</p>
            <a href={`/orders/${order.id}`}>View Details</a> {/* Link to order details page */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
