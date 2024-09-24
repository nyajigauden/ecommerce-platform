// src/components/UserProducts.js

import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/apiService';

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products.');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>My Products</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProducts;
