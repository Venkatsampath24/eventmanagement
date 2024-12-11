import React, { useState } from 'react';
import axios from 'axios';

function EnquiryForm() {
  const [eventName, setEventName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please login first');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/submit-enquiry',
        { event_name: eventName, customer_name: customerName, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Enquiry submitted successfully!');
    } catch (error) {
      alert('Error submitting enquiry');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Submit Your Enquiry
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below and we’ll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Event Name</label>
            <input
              type="text"
              placeholder="Enter event name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;
