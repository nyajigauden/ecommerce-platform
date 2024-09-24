import React from 'react';
import './Home.css'; // Import page-specific styles
import CategoryList from '../components/CategoryList';
import DiscountList from '../components/DiscountList';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';
import OrderSummary from '../components/OrderSummary';
import PaymentForm from '../components/PaymentForm';
import ReviewForm from '../components/ReviewForm';
import UserProfile from '../components/UserProfile';

function Home() {
  return (
    <div className="home-container container">
      <header className="home-header">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Explore our wide range of products and enjoy exclusive discounts!</p>
      </header>
      <div className="home-links">
        <a href="/products" className="home-link">View Products</a>
        <a href="/cart" className="home-link">Go to Cart</a>
        <a href="/login" className="home-link">Login</a>
        <a href="/register" className="home-link">Register</a>
      </div>
      <div className="card-container">
        <div className="card-item">
          <CategoryList />
        </div>
        <div className="card-item">
          <DiscountList />
        </div>
        <div className="card-item">
          <OrderForm />
        </div>
        <div className="card-item">
          <OrderList />
        </div>
        <div className="card-item">
          <OrderSummary />
        </div>
        <div className="card-item">
          <PaymentForm />
        </div>
        <div className="card-item">
          <ReviewForm />
        </div>
        <div className="card-item">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Home;
