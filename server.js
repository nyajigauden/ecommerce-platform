const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:8080', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/products', require('./productsRouter')); // Example route
app.use('/auth', require('./loginRouter')); // Example route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
