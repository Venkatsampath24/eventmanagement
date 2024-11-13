import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/admin/enquiries', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setEnquiries(response.data.enquiries);
        } catch (error) {
          alert('Error fetching enquiries');
        }
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Dashboard Header */}
      <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      </header>

      {/* Enquiries Table */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enquiries</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="px-6 py-3 text-left">Event</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-800">{enquiry.event_name}</td>
                <td className="px-6 py-4 text-gray-800">{enquiry.customer_name}</td>
                <td className="px-6 py-4 text-gray-800">{enquiry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
