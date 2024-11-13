import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated }) {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">Event Management</Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-indigo-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/enquiry" className="hover:text-indigo-200">
              Enquiry
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/admin" className="hover:text-indigo-200">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => localStorage.removeItem('token')}
                  className="hover:text-indigo-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-indigo-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-indigo-200">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
