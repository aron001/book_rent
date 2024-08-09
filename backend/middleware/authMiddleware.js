// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../model/user');
const config = require('../config/config');

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Find user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { authenticateUser };
