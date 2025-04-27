// src/components/services/ServiceApproach.js
import React from 'react';
import { CheckSquare } from 'lucide-react';

const ServiceApproach = ({ title }) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Implementation Approach</h2>
        <p className="text-xl text-gray-700 mb-8">
          A structured methodology that delivers immediate value while building toward long-term strategic goals, 
          designed specifically for alternative investment firms.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Phase 1 */}
          <div className="relative z-10 mb-16">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Discovery & Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your current environment, challenges, and strategic goals to define the path forward.
                </p>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">1</div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Technology environment assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Security posture evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Investment workflow analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional phases would go here */}
        </div>
      </div>
    </div>
  );
};

export default ServiceApproach;