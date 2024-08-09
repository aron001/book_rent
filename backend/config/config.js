// config.js

require('dotenv').config();

const config = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};

module.exports = config;
