import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Copyright Section */}
          <p className="text-sm">&copy; 2024 Event Management. All rights reserved.</p>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>If you have any questions, feel free to <a href="mailto:support@eventmanagement.com" className="text-gray-200 hover:text-gray-100">contact us</a>.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
