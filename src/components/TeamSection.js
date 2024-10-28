// src/components/TeamSection.js
import React from 'react';

const TeamSection = () => {
  const team = [
    { name: "Alice Smith", role: "CEO", image: "/image.png" },
    { name: "John Doe", role: "CTO", image: "/image.png" },
  ];

  return (
    <section className="team-section py-16 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="flex justify-around">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
