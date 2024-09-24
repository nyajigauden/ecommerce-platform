const express = require('express');
const router = express.Router();

// Define routes for login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Example response, replace with actual authentication logic
  if (username === 'user' && password === 'pass') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
