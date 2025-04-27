// src/components/services/ServiceCaseStudy.js
import React from 'react';
import { CheckSquare, ArrowUpRight } from 'lucide-react';

const ServiceCaseStudy = ({ title, caseStudy }) => {
  if (!caseStudy) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Success Story: {caseStudy.title}</h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-gradient-to-b from-black to-blue-900 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">{caseStudy.firmType}</h3>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm mb-6">
              <div className="font-medium mb-2">Client Profile</div>
              <ul className="space-y-3 text-sm">
                {caseStudy.profile.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="font-medium mb-2">Challenge</div>
              <p className="text-sm">
                {caseStudy.challenge}
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Our Approach</h4>
              <ul className="space-y-3 mb-6">
                {caseStudy.approach.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-xl font-semibold mb-4">Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{result.value}</div>
                    <div className="text-sm text-gray-700">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4 py-2 mb-4">
                "{caseStudy.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-medium text-blue-600">{caseStudy.author.title}</div>
                  <div className="text-sm text-gray-600">{caseStudy.author.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Ready to achieve similar results?</h3>
        <p className="mb-6 text-gray-700">Let's discuss how our {title} can transform your operations.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
          Schedule a Consultation
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCaseStudy;