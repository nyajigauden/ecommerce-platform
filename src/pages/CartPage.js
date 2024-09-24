import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css'; // Import the CSS for styling

function CartPage() {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <Cart />
    </div>
  );
}

export default CartPage;
