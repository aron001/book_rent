// src/component/Login.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/actions/authActions';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      // Redirect to admin page or another page if logged in
      navigate('/admin');
    }
  }, [token, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-950 flex items-center justify-center">
        <img 
          src="/Untitled.jpeg" 
          alt="Book" 
          className="max-w-xs max-h-full object-contain" 
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                required 
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                required 
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">Don't have an account?</p>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
