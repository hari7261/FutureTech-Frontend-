// src/components/FAQs.js
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "How does the AI technology work?",
      answer: "Our AI technology uses advanced machine learning algorithms to analyze patterns and provide intelligent recommendations based on your data."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and follow strict security protocols to ensure your data is always protected."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We offer a hassle-free cancellation process."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-gray-700 overflow-hidden">
              <button
                className="w-full p-4 flex items-center justify-between text-left bg-gray-800/50 hover:bg-gray-800/70"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === index && (
                <div className="p-4 bg-gray-800/30">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
