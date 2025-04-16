import React from 'react';
import { Link } from 'react-router-dom';
import AINavigation from '../../ai/AINavigation';
import AIFooter from '../../ai/components/common/AIFooter';
import AIServiceCatalog from '../../ai/components/services/AIServiceCatalog';

const ServicesPage = () => {
  // Service cards data
  const services = [
    {
      title: "Research Enhancement",
      description: "Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
          <path d="M16.5 9.4 7.55 4.24"></path>
          <circle cx="18.5" cy="15.5" r="2.5"></circle>
          <path d="M20.27 17.27 22 19"></path>
        </svg>
      ),
      path: "/solutions/research",
      color: "blue"
    },
    {
      title: "Due Diligence Acceleration",
      description: "Streamline document-heavy due diligence by automatically extracting key data points from contracts and filings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="14.5 2.5 19 7 14.5 11.5"></polyline>
          <rect x="3" y="2.5" width="12" height="9" rx="1"></rect>
          <path d="M3 16.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9"></path>
        </svg>
      ),
      path: "/solutions/due-diligence",
      color: "purple"
    },
    {
      title: "Portfolio Analytics",
      description: "Enhance portfolio insights with advanced analytics that discover hidden patterns and identify optimization opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="m6 14 8-10 4 6"></path>
        </svg>
      ),
      path: "/solutions/portfolio",
      color: "emerald"
    },
    {
      title: "Market Trend Analysis",
      description: "Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      path: "/solutions/market-trends",
      color: "sky"
    },
    {
      title: "Regulatory Compliance",
      description: "Stay ahead of regulatory requirements with AI that monitors rule changes and automates reporting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      ),
      path: "/solutions/compliance",
      color: "amber"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Enterprise-grade AI solutions tailored for alternative investment firms. Transform your investment workflow with specialized intelligence.
            </p>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Services Grid */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                to={service.path}
                key={index}
                className={`bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-gray-700 hover:border-${service.color}-500 transition-colors group cursor-pointer`}
              >
                <div className={`w-16 h-16 rounded-lg bg-${service.color}-900 bg-opacity-30 flex items-center justify-center mb-6 border border-${service.color}-800 text-${service.color}-400`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full Service Catalog */}
      <div className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Service Catalog</span>
          </h2>
          
          <AIServiceCatalog />
        </div>
      </div>
      
      {/* Service Comparison */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Choosing the Right <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">AI Solution</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            Our specialized AI solutions can be deployed individually or as an integrated suite to transform your investment processes.
          </p>
          
          <div className="relative overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-white">Solution</th>
                  <th className="px-6 py-4 text-white">Ideal For</th>
                  <th className="px-6 py-4 text-white">Key Benefits</th>
                  <th className="px-6 py-4 text-white">Time to Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-gray-800 bg-opacity-30">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-blue-900 bg-opacity-30 flex items-center justify-center mr-3 border border-blue-800 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Research Enhancement</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Research teams, analysts, portfolio managers</td>
                  <td className="px-6 py-4 text-gray-300">3.5x more research coverage, 40% time savings</td>
                  <td className="px-6 py-4 text-gray-300">2-4 weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-purple-900 bg-opacity-30 flex items-center justify-center mr-3 border border-purple-800 text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="14.5 2.5 19 7 14.5 11.5"></polyline>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Due Diligence Acceleration</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Deal teams, legal departments, risk managers</td>
                  <td className="px-6 py-4 text-gray-300">65% faster extraction, 2x more deals evaluated</td>
                  <td className="px-6 py-4 text-gray-300">4-6 weeks</td>
                </tr>
                <tr className="bg-gray-800 bg-opacity-30">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-emerald-900 bg-opacity-30 flex items-center justify-center mr-3 border border-emerald-800 text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10"></line>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Portfolio Analytics</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Portfolio managers, risk analysts, CIOs</td>
                  <td className="px-6 py-4 text-gray-300">18% risk-adjusted returns improvement</td>
                  <td className="px-6 py-4 text-gray-300">6-8 weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-sky-900 bg-opacity-30 flex items-center justify-center mr-3 border border-sky-800 text-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Market Trend Analysis</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Strategy teams, macro analysts, traders</td>
                  <td className="px-6 py-4 text-gray-300">2-3 weeks earlier trend identification</td>
                  <td className="px-6 py-4 text-gray-300">4-6 weeks</td>
                </tr>
                <tr className="bg-gray-800 bg-opacity-30">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-amber-900 bg-opacity-30 flex items-center justify-center mr-3 border border-amber-800 text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Regulatory Compliance</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Compliance teams, legal departments, CCOs</td>
                  <td className="px-6 py-4 text-gray-300">60% compliance workload reduction</td>
                  <td className="px-6 py-4 text-gray-300">8-12 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Integration Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Seamless <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">Integration</span>
                </h2>
                <p className="text-blue-100 mb-6">
                  Our AI solutions integrate with your existing investment infrastructure, data sources, and workflows to deliver value without disruption.
                </p>
                <ul className="space-y-4">
                  {[
                    "Easy connection to your existing data systems",
                    "Compatible with standard investment platforms",
                    "Secure API interfaces for custom integrations",
                    "Flexible deployment options (cloud, hybrid, on-premise)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-white font-bold mb-4">Common Integrations</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Data Providers", "CRM Systems", "Document Management", 
                      "Risk Platforms", "Portfolio Systems", "Market Data"
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-900 bg-opacity-50 rounded-lg p-3 border border-gray-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mr-3 border border-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Investment Processes?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI solutions can address your specific challenges.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />

    </div>
  );
};

export default ServicesPage;