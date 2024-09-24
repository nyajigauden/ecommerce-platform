import axios from 'axios';
import { API_ENDPOINTS } from '../config'; // Adjust the relative path to config.js

// Login a user
export const login = async (username, password) => {
  try {
    const response = await axios.post(API_ENDPOINTS.login, {
      username,
      password,
    });
    // Assuming the response contains a token
    localStorage.setItem('authToken', response.data.token); // Save the token
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Propagate the error for further handling
  }
};

// Register a new user
export const register = async (firstName, lastName, username, email, password, confirmPassword, phoneNumber) => {
  try {
    const response = await axios.post(API_ENDPOINTS.register, {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error; // Propagate the error for further handling
  }
};

// Request a password reset link
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(API_ENDPOINTS.forgotPassword, { email });
    return response.data;
  } catch (error) {
    console.error('Forgot password error:', error);
    throw error; // Propagate the error for further handling
  }
};

// Reset the user's password
export const resetPassword = async (token, newPassword, confirmPassword) => {
  try {
    const response = await axios.post(API_ENDPOINTS.resetPassword, {
      token,
      newPassword,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    console.error('Reset password error:', error);
    throw error; // Propagate the error for further handling
  }
};

// Verify email
export const verifyEmail = async (token) => {
  try {
    const response = await axios.post(API_ENDPOINTS.verifyEmail, { token });
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Email verification error:', error);
    throw error; // Propagate the error for further handling
  }
};

// Fetch user address
export const fetchAddress = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.address, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Token for authentication
      }
    });
    return response.data;
  } catch (error) {
    console.error('Fetch address error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Update user address
export const updateAddress = async (id, street, city, postalCode, country) => {
  try {
    const response = await axios.put(API_ENDPOINTS.address, {
      id,
      street,
      city,
      postalCode,
      country,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Token for authentication
      }
    });
    return response.data;
  } catch (error) {
    console.error('Update address error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Add address
export const addAddress = async (street, city, postalCode, country) => {
  try {
    const response = await axios.post(API_ENDPOINTS.address, {
      street,
      city,
      postalCode,
      country,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Token for authentication
      }
    });
    return response.data;
  } catch (error) {
    console.error('Add address error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Delete address
export const deleteAddress = async (id) => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.address}/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Token for authentication
      }
    });
    return response.data;
  } catch (error) {
    console.error('Delete address error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
