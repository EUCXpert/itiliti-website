import React from 'react';
import { Link } from 'react-router-dom';
import ServiceNavigation from './common/ServiceNavigation';
import ScheduleButton from '../ScheduleButton';
import ServiceSelector from './common/ServiceSelector';
import { 
  Target, 
  CheckSquare, 
  FileText 
} from 'lucide-react';

const AllServicesPage = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Use ServiceNavigation component instead of the regular Navigation */}
      <ServiceNavigation activeService="All Services" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services for Alternative Investment</h1>
            <p className="text-xl mb-8">
              Comprehensive technology solutions tailored specifically for hedge funds, private equity, venture capital, and family offices.
            </p>
            <ScheduleButton 
              text="Schedule a Service Consultation" 
              variant="primary" 
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
      
      {/* Integrated ServiceSelector Component */}
      <ServiceSelector />
      
      {/* Why Our Services Matter */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Our Services Matter</h2>
              <p className="text-xl text-gray-600">
                Alternative investment firms face unique technology challenges that generic solutions fail to address.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-black to-blue-700 rounded-xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">The Enterprise-Boutique Gap</h3>
                  <p className="mb-6">
                    Boutique alternative investment firms face a fundamental challenge: they must satisfy the same institutional investor expectations and regulatory requirements as $50B+ firms, but with a fraction of the resources.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>You need institutional-grade technology but can't justify enterprise costs</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Generic IT providers don't understand investment operations</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>You need sophisticated capabilities but have limited resources</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Solution</h3>
                  <p className="text-gray-700 mb-6">
                    We bridge this gap with enterprise-grade expertise and solutions right-sized for boutique investment firms.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Enterprise expertise adapted to boutique scale and budget</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Investment-specific technology solutions and methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Growth-aligned architecture that scales with your AUM</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Trading-hour aware support with financial services expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Service Process */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that delivers immediate value while building toward long-term strategic goals.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 mb-12">
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
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Technology environment assessment</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Security posture evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Investment workflow analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Strategic roadmap development</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Implementation planning</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ROI analysis and projection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Development of a tailored technology strategy aligned with your investment operations and growth objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      Structured execution that prioritizes critical components while minimizing disruption to your investment operations.
                    </p>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Phased deployment approach</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Trading-hour aware scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Change management with minimal disruption</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Ongoing optimization and refinement</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Quarterly strategic reviews</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ROI measurement and reporting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing refinement and improvement to ensure maximum value and adaptation to your evolving requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a consultation to discuss which of our services align with your current priorities and how we can help you achieve your strategic goals.
          </p>
          <ScheduleButton 
            text="Schedule a Service Consultation" 
            variant="primary" 
            className="text-lg px-8 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AllServicesPage;