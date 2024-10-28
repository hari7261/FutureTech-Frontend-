// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
