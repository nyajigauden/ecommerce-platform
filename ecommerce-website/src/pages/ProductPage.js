import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed and imported

// Define the base URL for the API
const BASE_URL = 'http://localhost:8080/api/products'; // Update this if needed

function ProductPage() {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Fetch product details when ID changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-page">
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductPage;
