// src/components/services/ServiceFAQ.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceFAQ = ({ title, faqs }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }
  
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button 
              className="flex justify-between items-center w-full text-left p-5 bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {expandedFaq === faq.id ? 
                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : 
                <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
              }
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 border-t border-gray-100 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFAQ;