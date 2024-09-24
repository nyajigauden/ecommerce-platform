// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { fetchProductById, addToCart } from '../api/apiService'; // Ensure these imports match your exports
import './ProductPage.css';

function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    loadProduct();
  }, [productId]);

  const handleAddToCart = async (quantity) => {
    try {
      await addToCart(productId, quantity);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => handleAddToCart(1)}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
