// productsRouter.js
const express = require('express');
const router = express.Router();

// Define routes for products
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});

router.post('/add', (req, res) => {
  const newProduct = req.body; // Assuming product details are sent in the request body
  // Here you would typically add logic to save the new product to a database
  res.status(201).json({ message: 'Product added', product: newProduct });
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  // Here you would typically fetch the product by ID from a database
  res.json({ id: productId, name: `Product ${productId}` });
});

// Export the router
module.exports = router;
