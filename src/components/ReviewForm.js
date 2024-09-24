// src/components/ReviewForm.js

import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    product: '',
    rating: '',
    comment: '',
    reviewDate: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    setMessage('Review submitted successfully!');
    setFormData({
      user: '',
      product: '',
      rating: '',
      comment: '',
      reviewDate: ''
    });
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="review-form">
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product</label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reviewDate">Review Date</label>
          <input
            type="date"
            id="reviewDate"
            name="reviewDate"
            value={formData.reviewDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <div className="alert">{message}</div>}
    </div>
  );
};

export default ReviewForm;
