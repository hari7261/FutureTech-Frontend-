import React from 'react';
const Features = () => {
    const features = [
      {
        title: "AI-Powered Insights",
        description: "Get real-time analytics and predictions powered by advanced machine learning algorithms.",
        icon: "✨"
      },
      {
        title: "Smart Automation",
        description: "Automate your workflow with intelligent processes that learn and adapt.",
        icon: "🤖"
      },
      {
        title: "Secure Platform",
        description: "Enterprise-grade security with end-to-end encryption and compliance.",
        icon: "🛡️"
      },
      {
        title: "Real-time Collaboration",
        description: "Work together seamlessly with team members across the globe.",
        icon: "🌐"
      }
    ];
    
    return (
      <section id="features" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple animate-pulse">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-neonBlue transition-all transform hover:scale-105 group shadow-lg hover:shadow-neonBlue/50"
              >
                <div className="text-5xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
    };
  
  export default Features;
  