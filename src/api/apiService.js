import axios from 'axios';
import { API_ENDPOINTS } from '../config'; // Ensure the path to config.js is correct

// Utility to fetch token from local storage
const getAuthToken = () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    console.error('Authorization token is missing.');
    throw new Error('No auth token');
  }
  return token;
};

// Error handling function
const handleApiError = (error, defaultMessage) => {
  if (error.response) {
    console.error('API Error:', error.response.data);
    alert(`${defaultMessage}: ${error.response.data.message || 'An error occurred.'}`);
  } else if (error.request) {
    console.error('No response received:', error.request);
    alert('No response from server. Please check your network connection.');
  } else {
    console.error('Error:', error.message);
    alert(`An error occurred: ${error.message}`);
  }
  throw error;
};

// Login a user
export const login = async (username, password) => {
  try {
    const response = await axios.post(API_ENDPOINTS.login, 
      { username, password }, // Request body
      { 
        headers: { 'Content-Type': 'application/json' } // Request headers
      }
    );
    console.log('Login Response:', response.data);
    const { jwt, success, message } = response.data;
    if (success && jwt) {
      localStorage.setItem('authToken', jwt);
      alert(message);
      return response.data;
    } else {
      throw new Error('Login failed: Token not received');
    }
  } catch (error) {
    handleApiError(error, 'Login failed. Please check your credentials and try again.');
  }
};

// Fetch user profile
export const fetchUserProfile = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(API_ENDPOINTS.userProfile, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Fetch user profile error');
    throw error;
  }
};

// Register a new user
export const register = async (firstName, lastName, username, email, password, confirmPassword, phoneNumber) => {
  try {
    const userData = { firstName, lastName, username, email, password, confirmPassword, phoneNumber };
    const response = await axios.post(API_ENDPOINTS.register, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Registration successful!');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Registration failed');
  }
};

// Request a password reset link
export const forgotPassword = async (email) => {
  if (typeof email !== 'string' || !email.trim()) {
    throw new Error('Invalid email parameter. Email is required.');
  }
  try {
    const response = await axios.post(API_ENDPOINTS.forgotPassword, { email }, {
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Password reset link sent!');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to send password reset link');
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
    handleApiError(error, 'Error resetting password. Please try again.');
  }
};

// Verify email
export const verifyEmail = async (token) => {
  try {
    const response = await axios.post(API_ENDPOINTS.verifyEmail, { token }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Email verification failed');
  }
};

// Fetch user address
export const fetchAddress = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(API_ENDPOINTS.addressGet, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch address.');
  }
};

// Update user address
export const updateAddress = async (id, street, city, postalCode, country) => {
  if (!id || !street || !city || !postalCode || !country) {
    console.error('All fields must be filled to update the address.');
    throw new Error('Validation error: Missing fields');
  }
  try {
    const token = getAuthToken();
    const response = await axios.put(API_ENDPOINTS.addressEdit(id), {
      street,
      city,
      postalCode,
      country,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to update address.');
  }
};

// Add a new address
export const addAddress = async (street, city, postalCode, country) => {
  if (!street || !city || !postalCode || !country) {
    console.error('All fields must be filled to add an address.');
    throw new Error('Validation error: Missing fields');
  }
  try {
    const token = getAuthToken();
    const response = await axios.post(API_ENDPOINTS.addressAdd, {
      street,
      city,
      postalCode,
      country,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to add address.');
  }
};

// Delete an address
export const deleteAddress = async (id) => {
  if (!id) {
    console.error('ID is required to delete an address.');
    throw new Error('Validation error: Missing ID');
  }
  try {
    const token = getAuthToken();
    const response = await axios.delete(API_ENDPOINTS.addressDelete(id), {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to delete address.');
  }
};

// Function to submit an order
export const submitOrder = async (order) => {
  try {
    const token = getAuthToken();
    console.log('Submitting order with data:', order);
    const response = await axios.post(API_ENDPOINTS.orderCreate, order, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Order submitted, response:', response);
    return response.data;
  } catch (error) {
    console.error('Error submitting order:', error.response ? error.response.data : error.message);
    throw new Error('Failed to submit order.');
  }
};

// Function to fetch orders by user
export const fetchOrdersByUser = async () => {
  try {
    const token = getAuthToken();
    console.log('Fetching orders for user');
    const response = await axios.get(API_ENDPOINTS.ordersByUser, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('Fetched orders, response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch orders.');
  }
};

// Function to fetch a specific order by ID
export const fetchOrderById = async (orderId) => {
  try {
    const token = getAuthToken();
    console.log('Fetching order with ID:', orderId);
    const response = await axios.get(API_ENDPOINTS.orderById(orderId), {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('Fetched order, response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch order.');
  }
};

// Function to update order status
export const updateOrderStatus = async (orderId, status) => {
  try {
    const token = getAuthToken();
    console.log('Updating order status for ID:', orderId, 'to:', status);
    const response = await axios.put(API_ENDPOINTS.updateOrderStatus(orderId), { status }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Order status updated, response:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating order status:', error.response ? error.response.data : error.message);
    throw new Error('Failed to update order status.');
  }
};

// Function to delete an order
export const deleteOrder = async (orderId) => {
  try {
    const token = getAuthToken();
    console.log('Deleting order with ID:', orderId);
    const response = await axios.delete(API_ENDPOINTS.deleteOrder(orderId), {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('Order deleted, response:', response);
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error.response ? error.response.data : error.message);
    throw new Error('Failed to delete order.');
  }
};
// Add a product
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.addProduct, productData, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to add product.');
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.getProducts, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch products.');
  }
};

// Fetch product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(API_ENDPOINTS.editProduct(productId), {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch product.');
  }
};

// Edit product
export const editProduct = async (productId, updatedProductData) => {
  try {
    const response = await axios.put(API_ENDPOINTS.editProduct(productId), updatedProductData, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to edit product.');
  }
};

// Delete product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(API_ENDPOINTS.deleteProduct(productId), {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to delete product.');
  }
};

// Add to cart
export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post(API_ENDPOINTS.addToCart, { productId, quantity }, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to add to cart.');
  }
};
