// middleware/roleMiddleware.js

const User = require('../model/user');

// Middleware to check if the user has a specific role
const authorizeRole = (requiredRole) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      if (user.role !== requiredRole) {
        return res.status(403).json({ message: 'Access denied' });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};

module.exports = { authorizeRole };
