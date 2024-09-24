// src/components/CategoryList.js
import React, { useState } from 'react';
import './CategoryList.css';

function CategoryList() {
  const [categories] = useState([
    { id: 1, name: 'Electronics', description: 'Gadgets and devices' },
    { id: 2, name: 'Clothing', description: 'Fashionable wear' }
  ]);

  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here if needed
    setMessage('Category List submitted successfully!');
    setInputValue(''); // Clear the input field

    // Hide message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="category-list">
      <h2>Category List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
      {message && <div className="message">{message}</div>} {/* Display message if it exists */}
    </div>
  );
}

export default CategoryList;
