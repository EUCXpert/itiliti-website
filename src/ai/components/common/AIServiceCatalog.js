import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIServiceCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Service categories
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'research', name: 'Research' },
    { id: 'diligence', name: 'Due Diligence' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'market', name: 'Market Analysis' },
    { id: 'regulatory', name: 'Regulatory' }
  ];
  
  // Service data
  const services = [
    {
      id: 'document-analysis',
      title: 'Document Analysis & Summarization',
      description: 'Extract key insights from research reports, SEC filings, and financial documents automatically',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      categories: ['research', 'diligence'],
      metrics: [
        { label: 'Processing Speed', value: '200+ pages per minute' },
        { label: 'Accuracy', value: '95% extraction accuracy' }
      ],
      color: 'blue'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis Engine',
      description: 'Detect sentiment patterns across earnings calls, news, and social media to identify market signals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="9" x2="9" y2="9"></line>
          <line x1="15" y1="9" x2="15" y2="9"></line>
          <path d="M9.5 13a3.5 3.5 0 0 0 5 0"></path>
        </svg>
      ),
      categories: ['research', 'market'],
      metrics: [
        { label: 'Sentiment Accuracy', value: '87% accuracy rating' },
        { label: 'Sources Monitored', value: '1000+ daily sources' }
      ],
      color: 'purple'
    },
    {
      id: 'entity-extraction',
      title: 'Entity & Relationship Extraction',
      description: 'Identify key entities and their relationships across thousands of documents automatically',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"></path>
          <path d="M6 15v-2a6 6 0 0 1 12 0v2"></path>
        </svg>
      ),
      categories: ['research', 'diligence'],
      metrics: [
        { label: 'Entity Accuracy', value: '92% identification rate' },
        { label: 'Relationship Mapping', value: '3-degree connections' }
      ],
      color: 'indigo'
    },
    {
      id: 'due-diligence-assistant',
      title: 'Due Diligence Acceleration Suite',
      description: 'Streamline document-heavy due diligence by automating data extraction and risk assessment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      categories: ['diligence'],
      metrics: [
        { label: 'Time Savings', value: '65% process acceleration' },
        { label: 'Risk Detection', value: '78% issue identification' }
      ],
      color: 'pink'
    },
    {
      id: 'portfolio-analytics',
      title: 'Portfolio Intelligence Platform',
      description: 'Gain deeper insights into portfolio performance with AI-driven analytics and optimization',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <line x1="3" y1="14" x2="9" y2="14"></line>
          <line x1="9" y1="4" x2="15" y2="4"></line>
          <line x1="15" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      categories: ['portfolio'],
      metrics: [
        { label: 'Performance Improvement', value: '18% risk-adjusted return' },
        { label: 'Analysis Depth', value: '125+ risk factors monitored' }
      ],
      color: 'emerald'
    },
    {
      id: 'market-trend-analysis',
      title: 'Market Trend Prediction Engine',
      description: "Identify emerging trends before they're obvious with AI that processes news and alternative data",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22v-8l4 4 4-4 4 4 4-4 4 4v8z"></path>
          <path d="M2 12v-2a4 4 0 0 1 4-4h16"></path>
          <polyline points="18 20 22 16 18 12"></polyline>
        </svg>
      ),
      categories: ['market', 'research'],
      metrics: [
        { label: 'Early Detection', value: '2-3 weeks ahead of market' },
        { label: 'Data Sources', value: '10,000+ monitored daily' }
      ],
      color: 'sky'
    },
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance AI',
      description: 'Stay ahead of regulatory requirements with AI that monitors rule changes and automates reporting',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0-6 6c0 7 6 12 6 12s6-5 6-12a6 6 0 0 0-6-6Z"></path>
          <circle cx="12" cy="9" r="2"></circle>
        </svg>
      ),
      categories: ['regulatory'],
      metrics: [
        { label: 'Compliance Coverage', value: '99.5% requirement tracking' },
        { label: 'Update Speed', value: '24hr regulatory updates' }
      ],
      color: 'amber'
    },
    {
      id: 'risk-assessment',
      title: 'Portfolio Risk Assessment Engine',
      description: 'Identify, quantify, and mitigate risk factors across your portfolio with AI-driven analysis',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.3 21H21v-8l-4 4-4-4-3.7 3.7"></path>
          <path d="M14 8V5c0-1.7-1.3-3-3-3H5a3 3 0 0 0-3 3v14"></path>
          <circle cx="5" cy="18" r="3"></circle>
        </svg>
      ),
      categories: ['portfolio', 'market'],
      metrics: [
        { label: 'Risk Visibility', value: '95% factor identification' },
        { label: 'Correlation Detection', value: '87% accuracy rate' }
      ],
      color: 'rose'
    }
  ];
  
  // Filter services based on active category
  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(service => service.categories.includes(activeFilter));
  
  // Stagger animation for service cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Services</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Enterprise-grade AI solutions tailored for alternative investment firms. Transform your investment workflow with specialized intelligence.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                ? 'bg-blue-600 text-white shadow-glow'
                : 'bg-gray-800 bg-opacity-60 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-700 transition-colors group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${service.color}-900 bg-opacity-30 flex items-center justify-center mr-4 border border-${service.color}-800`}>
                    <div className={`text-${service.color}-400`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 min-h-[4rem]">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-900 bg-opacity-50 rounded-lg p-3 border border-gray-800">
                      <div className="text-sm text-gray-400">{metric.label}</div>
                      <div className="text-white font-medium">{metric.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {service.categories.map(cat => {
                      const category = categories.find(c => c.id === cat);
                      return (
                        <span key={cat} className="text-xs px-2 py-1 bg-gray-900 text-gray-400 rounded">
                          {category?.name}
                        </span>
                      );
                    })}
                  </div>
                  
                  <a 
                    href={`/services/${service.id}`} 
                    className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            Request a Demo
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <p className="text-gray-400 mt-4">
            Find the right AI solution for your investment firm's specific needs
          </p>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
        
        .shadow-glow-lg {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default AIServiceCatalog;