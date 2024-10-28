// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              FutureTech
            </h3>
            <p className="text-gray-400">
              Transforming the future of digital experiences with AI-powered solutions.
            </p>
            <p className="text-gray-500 mt-2">
              <a href="https://github.com/hari7261" className="text-white">Made  with love by Hari</a>

            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;