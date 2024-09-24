import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import './PaymentPage.css'; // Import CSS if needed

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: 'Select...',
    paymentInfo: ''
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // Handle payment submission logic
    console.log('Payment submitted:', paymentDetails);
  };

  return (
    <div className="payment-page">
      <h1>Payment Form</h1>
      <PaymentForm
        paymentDetails={paymentDetails}
        onPaymentChange={handlePaymentChange}
        onSubmitPayment={handleSubmitPayment}
      />
    </div>
  );
};

export default PaymentPage;
