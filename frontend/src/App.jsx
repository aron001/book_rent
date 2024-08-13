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

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={token ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/books"
          element={token ? <Book /> : <Navigate to="/login" />}
        />
        <Route
          path="/owners"
          element={token ? <Owners /> : <Navigate to="/login" />}
        />
        <Route
          path="/uploads"
          element={token ? <BookUploads /> : <Navigate to="/login" />}
        />

        {/* Redirect authenticated users away from login and signup pages */}
        <Route
          path="/"
          element={token ? <Navigate to="/admin" /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={token ? <Navigate to="/admin" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
