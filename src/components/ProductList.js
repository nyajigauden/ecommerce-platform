// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Make sure you have this CSS file for styling

const ProductList = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a data fetch
    const fetchProducts = async () => {
      try {
        // Assuming `products` is passed in as a prop, you can fetch data here if needed
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      <ul>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(product => (
            <li key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <p className="product-name"><strong>{product.name}</strong></p>
              <p className="product-description">{product.description}</p>
              <p className="product-price"><strong>Price:</strong> ${product.price}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
