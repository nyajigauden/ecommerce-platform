// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { fetchUserProfile } from '../api/apiService'; 
import './UserProfile.css'; 

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setProfile(data);
      } catch (err) {
        setError('Error fetching profile.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-profile-container">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      <nav className="user-profile-nav">
        <ul>
          <li><Link to="/address-form">Address</Link></li>
          <li><Link to="/order-form">Order</Link></li>
          <li><Link to="/review-form">Review</Link></li>
          <li><Link to="/product/1">Product</Link></li> 
          <li><Link to="/payment-form">Payment Form</Link></li>
          <li><Link to="/add-product">Add Product</Link></li> {/* Added link for AddProduct */}
        </ul>
      </nav>
      <div className="user-profile">
        <h2>User Profile</h2>
        {profile && (
          <div>
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            <p>
              <strong>Address:</strong> 
              {profile.address 
                ? `${profile.address.street}, ${profile.address.city}, ${profile.address.postalCode}, ${profile.address.country}` 
                : 'Not provided'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
