const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/user')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error(' no token')
  }
})
//custemer middleware

const isCustemer =  (req, res, next) => {
  if (req.user.role === 0){
    throw new Error('Not authorized, no custemer')

  }
  next();
}
const isEnduser =  (req, res, next) => {
  if (req.user.role === 1){
    throw new Error('Not authorized, no enduser')

  }
  next();
}
const isAdmin =  (req, res, next) => {
  if (req.user.role === 0){
    throw new Error('Not authorized, u are end user no admin')

  }
  else if(req.user.role===1){
    throw new Error('Not authorized, u are cust not admin')
  }
  next();
}

module.exports = { protect ,isEnduser,isAdmin}