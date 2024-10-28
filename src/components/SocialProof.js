// src/components/SocialProof.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white"> Join Us  On Social Media</h2>

        <div className="flex flex-wrap justify-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-24 h-auto mx-4 my-4 text-white">
            <FaFacebook size={48} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-24 h-auto mx-4 my-4 text-white">
            <FaTwitter size={48} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-24 h-auto mx-4 my-4 text-white">
            <FaInstagram size={48} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-24 h-auto mx-4 my-4 text-white">
            <FaLinkedin size={48} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-24 h-auto mx-4 my-4 text-white">
            <FaYoutube size={48} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
