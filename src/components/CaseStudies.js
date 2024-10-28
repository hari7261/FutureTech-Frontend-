// src/components/CaseStudies.js
import React from 'react';

const CaseStudies = () => {
  const cases = [
    { title: "TechCorp Transformation", description: "Improved revenue by 300% with AI solutions." },
    { title: "InnoStart Success", description: "Enhanced customer experience with automation." },
  ];

  return (
    <section className="case-studies py-16 bg-gray-800 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((caseStudy, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-2xl mb-4">{caseStudy.title}</h3>
            <p className="text-gray-300">{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
