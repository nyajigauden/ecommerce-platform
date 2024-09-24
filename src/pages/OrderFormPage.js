import React, { useState } from 'react';
import OrderForm from '../components/OrderForm';
import './OrderFormPage.css'; // Import CSS if needed

const OrderFormPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    shippingAddress: '',
    paymentMethod: 'Select...'
  });

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Handle order placement logic
    console.log('Order placed:', orderDetails);
  };

  return (
    <div className="order-form-page">
      <h1>Order Form</h1>
      <OrderForm
        orderDetails={orderDetails}
        onOrderChange={handleOrderChange}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default OrderFormPage;
