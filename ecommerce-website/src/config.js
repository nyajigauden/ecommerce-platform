// src/config.js

const BASE_URL = 'http://localhost:8080/auth'; // Define the base URL for your API

export const API_ENDPOINTS = {
  login: `${BASE_URL}/login`, // Endpoint for login
  register: `${BASE_URL}/register`, // Endpoint for register
  forgotPassword: `${BASE_URL}/forgot`, // Endpoint for forgot password
  resetPassword: `${BASE_URL}/reset`, // Endpoint for reset password
};