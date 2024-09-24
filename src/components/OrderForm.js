import React, { useState } from 'react';
import { submitOrder } from '../api/apiService'; // Ensure this path is correct
import './OrderForm.css';

function OrderForm() {
  const [order, setOrder] = useState({
    orderDate: '',
    totalAmount: '',
    items: [{ quantity: '', price: '' }] // Initial item
  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...order.items];
    newItems[index][name] = value;
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: newItems
    }));
  };

  const addItem = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: [...prevOrder.items, { quantity: '', price: '' }]
    }));
  };

  const removeItem = (index) => {
    const newItems = order.items.filter((_, i) => i !== index);
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: newItems
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitOrder(order);
      if (response) {
        setMessage('Order submitted successfully!');
        setError('');
        setOrder({
          orderDate: '',
          totalAmount: '',
          items: [{ quantity: '', price: '' }]
        });
      } else {
        setError('Failed to submit order. Please try again.');
      }
    } catch (error) {
      setError('Error: No response from server. Please check your network connection.');
    }
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 3000);
  };

  return (
    <div className="order-form">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order Date:
          <input
            type="date"
            name="orderDate"
            value={order.orderDate}
            onChange={handleOrderChange}
            required
          />
        </label>
        <label>
          Total Amount:
          <input
            type="number"
            name="totalAmount"
            value={order.totalAmount}
            onChange={handleOrderChange}
            required
          />
        </label>
        <h3>Order Items</h3>
        {order.items.map((item, index) => (
          <div key={index} className="order-item">
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
            </label>
            <button type="button" onClick={() => removeItem(index)}>Remove Item</button>
          </div>
        ))}
        <button type="button" onClick={addItem}>Add Item</button>
        <button type="submit">Submit</button>
      </form>
      {message && <div className="alert success">{message}</div>}
      {error && <div className="alert error">{error}</div>}
    </div>
  );
}

export default OrderForm;
