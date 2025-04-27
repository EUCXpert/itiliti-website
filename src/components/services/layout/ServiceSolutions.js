// src/components/services/ServiceSolutions.js
import React from 'react';
import { CheckSquare } from 'lucide-react';

const ServiceSolutions = ({ title, serviceOfferings, category }) => {
  if (!serviceOfferings || !Array.isArray(serviceOfferings)) {
    console.error('ServiceSolutions: serviceOfferings prop is missing or not an array');
    return <div>Loading solutions data...</div>;
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6">Our {title} Solutions</h2>
        <p className="text-xl text-gray-700 mb-8">
          We've developed specialized capabilities tailored to the unique needs of alternative investment firms, 
          delivering enterprise-grade solutions at boutique scale.
        </p>
      </div>
      
      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {serviceOfferings.map((offering, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  {offering.icon}
                </div>
                <h3 className="text-lg font-semibold">{offering.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{offering.description}</p>
              
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <h4 className="font-medium text-gray-800 mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {offering.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSolutions;