import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    try {
      await axios.post('/api/checkout');
      alert('Checkout successful');
    } catch (error) {
      console.error(error);
      alert('Checkout failed');
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.product.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
