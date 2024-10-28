// src/components/MetricsSection.js
import React from 'react';

const MetricsSection = () => {
  const metrics = [
    { label: "Clients Served", value: "1,200+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Years of Experience", value: "10+" },
  ];

  return (
    <section className="metrics-section py-16 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Our Impact in Numbers</h2>
      <div className="flex justify-around">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-5xl font-bold">{metric.value}</p>
            <p className="text-gray-400">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
