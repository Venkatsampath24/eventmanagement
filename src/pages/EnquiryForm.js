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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Submit an Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Event Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
