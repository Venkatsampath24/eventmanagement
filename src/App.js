import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import EnquiryForm from './pages/EnquiryForm';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';

function App() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  return (
    <Router>
      {/* Navbar with styling */}
      <Navbar isAuthenticated={isAuthenticated} />
      
      {/* Main content area */}
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-indigo-600 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">Event Management</h1>
        </header>

        {/* Main routes content */}
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/enquiry" element={<EnquiryForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
