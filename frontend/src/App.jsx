import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './component/signUp';
import Login from './component/Login';
import AdminDashboard from './component/Admin';
import Book from './component/books';
import Owners from './component/Owners';
import BookUploads from './component/bookUpload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<AdminDashboard />} />

        <Route path="/books" element={<Book />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/uploads" element={<BookUploads />} />
      </Routes>
    </Router>
  );
}

export default App;
