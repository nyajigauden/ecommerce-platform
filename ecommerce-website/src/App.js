import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page components
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

// Component imports
import AddressForm from './components/AddressForm';
import CategoryList from './components/CategoryList';
import DiscountList from './components/DiscountList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderSummary from './components/OrderSummary';
import PaymentForm from './components/PaymentForm';
import ReviewForm from './components/ReviewForm';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

        {/* Private Routes */}
        <Route path="/address-form" element={<PrivateRoute element={<AddressForm />} />} />
        <Route path="/category-list" element={<PrivateRoute element={<CategoryList />} />} />
        <Route path="/discount-list" element={<PrivateRoute element={<DiscountList />} />} />
        <Route path="/order-form" element={<PrivateRoute element={<OrderForm />} />} />
        <Route path="/order-list" element={<PrivateRoute element={<OrderList />} />} />
        <Route path="/order-summary" element={<PrivateRoute element={<OrderSummary />} />} />
        <Route path="/payment-form" element={<PrivateRoute element={<PaymentForm />} />} />
        <Route path="/review-form" element={<PrivateRoute element={<ReviewForm />} />} />
        <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} />} />
      </Routes>
    </Router>
  );
}

export default App;
