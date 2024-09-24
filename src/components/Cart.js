import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import the CSS for styling

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch cart items from an API or use static data
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        const totalAmount = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalAmount);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle checkout logic
    console.log('Proceeding to checkout');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </ul>
      <div className="cart-summary">
        <p>Total: ${total}</p>
        <form onSubmit={handleCheckout}>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
