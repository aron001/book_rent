// routes/userRoutes.js

const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controller/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', authenticateUser, getProfile);

module.exports = router;
