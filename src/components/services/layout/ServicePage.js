import React, { useState } from 'react';
import ServiceNavigation from '../common/ServiceNavigation';
import { 
  CheckSquare, 
  ArrowRight, 
  Target, 
  Shield, 
  ChevronDown,
  ChevronUp,
  Calendar,
  Download,
  Users,
  ArrowUpRight
} from 'lucide-react';

const ServicePage = ({ 
  title, 
  subtitle, 
  description, 
  challenges, 
  keyFeatures,
  serviceOfferings,
  metrics,
  caseStudy,
  faqs = []
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };
  
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <ServiceNavigation activeService={title} />
      
      {/* Hero Section - Enhanced with clearer CTAs */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}<br/><span className="text-blue-300">{subtitle}</span></h1>
            <p className="text-xl mb-8 max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Service Overview
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation - Improved visual feedback */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'solutions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('solutions')}
            >
              Our Solutions
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'approach' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('approach')}
            >
              Our Approach
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap transition-colors ${activeTab === 'casestudy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('casestudy')}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Overview Tab - Restructured to focus on challenges */}
          {activeTab === 'overview' && (
            <div>
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">The {title} Challenge</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Alternative investment firms face unique challenges that generic solutions fail to address. 
                  Our specialized approach delivers enterprise-grade capabilities at a scale and cost appropriate for boutique firms.
                </p>
              </div>
              
              {/* Challenge Grid - Improved visual presentation */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex items-start gap-5">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      {challenge.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
                          
              {/* Key Metrics Section - Improved visual presentation */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="p-4 bg-blue-600 rounded-full text-white flex-shrink-0">
                    <Shield className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{keyFeatures.title}</h3>
                    <p className="text-gray-700 mb-6">{keyFeatures.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {metrics.map((metric, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                          <div className="text-sm font-medium">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Solutions Tab - Restructured service offerings */}
          {activeTab === 'solutions' && (
            <div>
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">Our {title} Solutions</h2>
                <p className="text-xl text-gray-700 mb-8">
                  We've developed specialized capabilities tailored to the unique needs of alternative investment firms, 
                  delivering enterprise-grade solutions at boutique scale.
                </p>
              </div>
              
              {/* Service Cards - Improved to 2x2 Grid */}
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
              
              {/* Competitive Advantage Section */}
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl overflow-hidden shadow-lg">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Competitive Advantage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Against Generic MSPs</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Deep understanding of alternative investment workflows vs. general business IT knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Financial services-grade security vs. general business security</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Investment-specific methodology vs. generic IT implementation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Against Enterprise Providers</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Right-sized for under-50-employee firms vs. enterprise-scale complexity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Streamlined approach vs. lengthy enterprise deployments</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                          <span>Appropriate for current AUM vs. enterprise pricing models</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Approach Tab - Implementation methodology */}
          {activeTab === 'approach' && (
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
                  
                  {/* Phase 2 */}
                  <div className="relative z-10 mb-16">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                        <div className="bg-white p-5 rounded-lg shadow-md">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Strategic roadmap development</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Implementation planning</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
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
                  
                  {/* Phase 3 */}
                  <div className="relative z-10 mb-16">
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
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Phased deployment approach</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Trading-hour aware scheduling</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Change management with minimal disruption</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 4 */}
                  <div className="relative z-10">
                    <div className="md:flex items-center">
                      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                        <div className="bg-white p-5 rounded-lg shadow-md">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Ongoing optimization and refinement</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Quarterly strategic reviews</span>
                            </li>
                            <li className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
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
          )}
          
          {/* Case Study Tab - Enhanced layout */}
          {activeTab === 'casestudy' && (
            <div>
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
                          <img src="/api/placeholder/60/60" alt={caseStudy.author.title} className="w-12 h-12 rounded-full mr-4" />
                          <div>
                            <div className="font-medium text-blue-600">{caseStudy.author.title}</div>
                            <div className="text-sm text-gray-600">{caseStudy.author.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional CTA */}
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to achieve similar results?</h3>
                  <p className="mb-6 text-gray-700">Let's discuss how our {title} can transform your operations.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                    Schedule a Consultation
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQs Tab - Improved interaction */}
          {activeTab === 'faqs' && (
            <div>
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
              
              {/* Additional resources section */}
              <div className="mt-12 bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Download className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Service Overview</div>
                      <div className="text-sm text-gray-600">Detailed overview of our {title} services</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Users className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Client Testimonials</div>
                      <div className="text-sm text-gray-600">Hear from our alternative investment clients</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default ServicePage;