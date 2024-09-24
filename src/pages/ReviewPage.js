import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import './ReviewPage.css'; // Import CSS if needed

const ReviewPage = () => {
  const [review, setReview] = useState({
    productId: '',
    rating: '',
    comment: ''
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission logic
    console.log('Review submitted:', review);
  };

  return (
    <div className="review-page">
      <h1>Submit a Review</h1>
      <ReviewForm
        review={review}
        onReviewChange={handleReviewChange}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
};

export default ReviewPage;
