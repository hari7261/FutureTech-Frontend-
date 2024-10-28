// src/App.js
import React from 'react';
import './App.css';

import NavHeader from './components/NavHeader'; // Assuming you have NavHeader
import Hero from './components/Hero'; // Import the Hero component
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ServicesOverview from './components/ServicesOverview';
import MetricsSection from './components/MetricsSection';
import CaseStudies from './components/CaseStudies';
import TeamSection from './components/TeamSection';
import ClientReviews from './components/ClientReviews';
import FinancialTools from './components/FinancialTools';
import InsightsSection from './components/InsightsSection';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <div className="App">
      <NavHeader /> {/* Include the NavHeader */}
      <Hero /> {/* Include the Hero section */}
      <Features />
      <Testimonials />
      <ServicesOverview />
      <MetricsSection />
      <CaseStudies />
      <TeamSection />
      <ClientReviews />
      <FinancialTools />
      <InsightsSection />
      <FAQs />
      <ContactForm />
      <SocialProof />
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;
