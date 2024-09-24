import React from 'react';
import OrderForm from '../components/OrderForm';

function OrderPage() {
  // Example shipping address data
  const shippingAddress = {
    address: '123 Main St',
    city: 'Sample City',
    postalCode: '12345',
    country: 'Sample Country',
  };

  return (
    <div>
      <h1>Order Page</h1>
      <OrderForm shippingAddress={shippingAddress} />
    </div>
  );
}

export default OrderPage;
