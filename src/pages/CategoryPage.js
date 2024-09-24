// src/pages/CategoryPage.js
import React from 'react';
import CategoryList from '../components/CategoryList';
import './CategoryPage.css'; // Import CSS for page styling

function CategoryPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="category-page">
      <CategoryList />
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit-button">Submit All</button>
      </form>
    </div>
  );
}

export default CategoryPage;
