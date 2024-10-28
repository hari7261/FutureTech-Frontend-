// src/components/InsightsSection.js
import React from 'react';

const insightsData = [
  {
    title: 'Understanding Market Trends',
    description: 'A deep dive into the current market trends and how to leverage them for your business.',
    link: '#'
  },
  {
    title: 'The Future of Technology',
    description: 'Exploring the future technological advancements that will shape our world.',
    link: '#'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'How to make effective business decisions based on data analytics.',
    link: '#'
  }
];

const InsightsSection = () => {
  return (
    <section className="py-16 px-8 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Insights & Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insightsData.map((insight, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{insight.title}</h3>
            <p className="text-gray-300 mb-4">{insight.description}</p>
            <a href={insight.link} className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
