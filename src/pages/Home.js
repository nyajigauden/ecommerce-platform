import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our BuzzMart</h1>
        <p>Experience the Buzz: Shop Now at BuzzMart for Exclusive Discounts and Fresh Finds!</p>
      </header>
      <nav className="home-nav">
        <Link to="/login">Login</Link>
        <Link to="/cart">Go to Cart</Link>
        <Link to="/category-list">Category List</Link>
      </nav>
    </div>
  );
}

export default Home;
