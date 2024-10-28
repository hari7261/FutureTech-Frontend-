// src/components/ClientReviews.js
import React from 'react';

const ClientReviews = () => {
  const reviews = [
    { name: "Sarah", feedback: "This platform has transformed our business!" },
    { name: "Michael", feedback: "Highly recommend for innovative solutions." },
  ];

  return (
    <section className="client-reviews py-16 bg-gray-800 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-lg">
            <p className="italic">"{review.feedback}"</p>
            <p className="font-bold mt-4">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
