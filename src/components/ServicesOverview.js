// src/components/ServicesOverview.js
import React from 'react';

const ServicesOverview = () => {
  const services = [
    { title: "AI-Driven Analytics", description: "Leverage AI for deep insights and business intelligence." },
    { title: "Automated Workflows", description: "Streamline tasks with smart automation." },
    { title: "Predictive Modeling", description: "Stay ahead with predictive data models." },
    { title: "Cloud Integration", description: "Seamlessly integrate with cloud services for scalability." },
    { title: "Cybersecurity Solutions", description: "Protect your business with advanced security measures." },
    { title: "IoT Connectivity", description: "Connect and manage IoT devices efficiently." },
  ];

  return (
    <section className="services-overview py-16 bg-gray-800 text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-item bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;