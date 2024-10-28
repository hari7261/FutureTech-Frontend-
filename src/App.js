import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Star, Menu, X, ChevronDown } from 'lucide-react';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            FutureTech
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <a href="#features" className="block py-2 text-gray-300">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-300">How It Works</a>
            <a href="#pricing" className="block py-2 text-gray-300">Pricing</a>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-8">
              <span className="text-sm text-gray-300">🚀 Welcome to the future</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Transform Your Digital Experience
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Harness the power of AI to create extraordinary digital experiences that captivate and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 group transition-all">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-lg text-gray-300 font-medium transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    { title: "AI-Powered Insights", description: "Get real-time analytics and predictions powered by advanced machine learning algorithms.", icon: "✨" },
    { title: "Smart Automation", description: "Automate your workflow with intelligent processes that learn and adapt.", icon: "🤖" },
    { title: "Secure Platform", description: "Enterprise-grade security with end-to-end encryption and compliance.", icon: "🛡️" },
    { title: "Real-time Collaboration", description: "Work together seamlessly with team members across the globe.", icon: "🌐" }
  ];
  
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 text-xl">Discover what makes us different</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO at TechCorp", image: "/api/placeholder/100/100", quote: "This platform has transformed how we approach digital innovation." },
    { name: "Mark Stevens", role: "CTO at StartupX", image: "/api/placeholder/100/100", quote: "The AI-powered features have increased our productivity by 300%." }
  ];
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Customer Success Stories
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <div className="flex items-start gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "49", features: ["Basic AI features", "5 team members", "50GB storage", "Email support"] },
    { name: "Pro", price: "99", features: ["Advanced AI features", "Unlimited team members", "500GB storage", "24/7 priority support"] }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Choose Your Plan
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="text-gray-300 text-lg mb-4">${plan.price}/mo</p>
              <ul className="text-gray-400 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-500 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} FutureTech. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <div>
    <TopBar />
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <Footer />
  </div>
);

export default App;
