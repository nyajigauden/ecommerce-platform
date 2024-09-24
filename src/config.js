// src/config.js

export const API_ENDPOINTS = {
  login: 'http://194.163.169.165:8080/auth/login',
  register: 'http://194.163.169.165:8080/auth/register',
  forgotPassword: 'http://194.163.169.165:8080/auth/forgot',
  resetPassword: 'http://194.163.169.165:8080/auth/reset',
  verifyEmail: 'http://194.163.169.165:8080/auth/verify',

  // Address Form Endpoints
  addressGet: 'http://194.163.169.165:8080/user/address',
  addressAdd: 'http://194.163.169.165:8080/user/address',
  addressEdit: (id) => `http://194.163.169.165:8080/user/address/${id}`,
  addressDelete: (id) => `http://194.163.169.165:8080/user/address/${id}`,
  userProfile: 'http://194.163.169.165:8080/user/me',

  // Order Form Endpoints
  orderCreate: 'http://194.163.169.165:8080/orders/create',
  ordersByUser: 'http://194.163.169.165:8080/orders/user',
  orderById: (orderId) => `http://194.163.169.165:8080/orders/${orderId}`,
  updateOrderStatus: (orderId) => `http://194.163.169.165:8080/orders/${orderId}/status`,
  deleteOrder: (orderId) => `http://194.163.169.165:8080/orders/${orderId}`,

  // Payment Endpoints
  makePayment: (orderId) => `http://194.163.169.165:8080/payment/pay/${orderId}`, // POST
  paymentSuccess: 'http://194.163.169.165:8080/payment/success', // GET
  paymentCancel: 'http://194.163.169.165:8080/payment/cancel', // GET

  // Logout
  logout: 'http://194.163.169.165:8080/auth/logout',

  // Categories Endpoints
  getAllCategories: 'http://194.163.169.165:8080/api/categories',
  getCategoryById: (categoryID) => `http://194.163.169.165:8080/api/category/${categoryID}`,

  // Products Endpoints
  addProduct: 'http://194.163.169.165:8080/auth/product',
  getProducts: 'http://194.163.169.165:8080/auth/products',
  editProduct: (productID) => `http://194.163.169.165:8080/auth/product/${productID}`,
  deleteProduct: (productID) => `http://194.163.169.165:8080/auth/product/${productID}`,
};
