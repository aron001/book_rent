import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Signup from './component/signUp';
import Login from './component/Login';
import AdminDashboard from './component/Admin';
import Book from './component/books';
import Owners from './component/Owners';
import BookUploads from './component/bookUpload';

function App() {
  // Access the auth state from Redux
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        {token ? (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/books" element={<Book />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/uploads" element={<BookUploads />} />
            <Route path="/" element={<AdminDashboard />} />
          </>
        ) : (
          // Redirect to login if the user is not logged in
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
