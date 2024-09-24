import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login, register, forgotPassword, resetPassword } from './apiService'; // Adjust the path as necessary

// Create an instance of Axios Mock Adapter
const mock = new MockAdapter(axios);

// Test suite for API Service
describe('API Service', () => {
  // Test Login
  it('should successfully log in and store the token', async () => {
    const mockToken = 'fake-token';
    mock.onPost('http://localhost:8080/auth/login').reply(200, { token: mockToken });

    const response = await login('testuser', 'testpassword');
    expect(response.token).toBe(mockToken);
    expect(localStorage.getItem('authToken')).toBe(mockToken);
  });

  it('should handle login errors', async () => {
    mock.onPost('http://localhost:8080/auth/login').reply(400, { message: 'Invalid credentials' });

    await expect(login('testuser', 'wrongpassword')).rejects.toThrow();
  });

  // Test Register
  it('should successfully register a new user', async () => {
    mock.onPost('http://localhost:8080/auth/register').reply(200, { message: 'User registered' });

    const response = await register('John', 'Doe', 'newuser', 'newuser@example.com', 'newpassword', 'newpassword', '1234567890');
    expect(response.message).toBe('User registered');
  });

  it('should handle registration errors', async () => {
    mock.onPost('http://localhost:8080/auth/register').reply(400, { message: 'Registration failed' });

    await expect(register('John', 'Doe', 'newuser', 'newuser@example.com', 'newpassword', 'wrongpassword', '1234567890')).rejects.toThrow();
  });

  // Test Forgot Password
  it('should send forgot password request successfully', async () => {
    mock.onPost('http://localhost:8080/auth/forgot').reply(200, { message: 'Password reset link sent' });

    const response = await forgotPassword('user@example.com');
    expect(response.message).toBe('Password reset link sent');
  });

  it('should handle forgot password errors', async () => {
    mock.onPost('http://localhost:8080/auth/forgot').reply(400, { message: 'Error sending reset link' });

    await expect(forgotPassword('user@example.com')).rejects.toThrow();
  });

  // Test Reset Password
  it('should reset the password successfully', async () => {
    mock.onPost('http://localhost:8080/auth/reset').reply(200, { message: 'Password reset successful' });

    const response = await resetPassword('reset-token', 'newpassword', 'newpassword');
    expect(response.message).toBe('Password reset successful');
  });

  it('should handle reset password errors', async () => {
    mock.onPost('http://localhost:8080/auth/reset').reply(400, { message: 'Error resetting password' });

    await expect(resetPassword('reset-token', 'newpassword', 'wrongpassword')).rejects.toThrow();
  });
});
