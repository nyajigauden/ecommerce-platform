import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages and components
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import CategoryList from './components/CategoryList';
import DiscountList from './components/DiscountList';
import OrderForm from './components/OrderForm';
import PaymentForm from './components/PaymentForm';
import ReviewForm from './components/ReviewForm';
import UserProfile from './components/UserProfile';
import AddressForm from './components/AddressForm';
import PrivateRoute from './components/PrivateRoute';

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
        <Route path="/verify-email" element={<EmailVerificationPage />} />

        {/* Private Routes */}
        <Route path="/category-list" element={<PrivateRoute><CategoryList /></PrivateRoute>} />
        <Route path="/discount-list" element={<PrivateRoute><DiscountList /></PrivateRoute>} />
        <Route path="/order-form" element={<PrivateRoute><OrderForm /></PrivateRoute>} />
        <Route path="/payment-form" element={<PrivateRoute><PaymentForm /></PrivateRoute>} />
        <Route path="/review-form" element={<PrivateRoute><ReviewForm /></PrivateRoute>} />
        <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/address-form" element={<PrivateRoute><AddressForm /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
