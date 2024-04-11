import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <Logo width="100px" />
            <p className="mt-4 text-gray-300">© 2024 Blogify. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><Link to="/" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Affiliate Program</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Press Kit</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li><Link to="/" className="text-gray-300 hover:text-white">Account</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Help</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Customer Support</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Legals</h3>
            <ul>
              <li><Link to="/" className="text-gray-300 hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
