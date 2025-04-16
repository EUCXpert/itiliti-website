import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AICapabilitiesSection = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  
  const capabilities = [
    {
      title: "Investment Research Enhancement",
      description: "Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources to identify signals human analysts might miss.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
          <path d="M16.5 9.4 7.55 4.24"></path>
          <circle cx="18.5" cy="15.5" r="2.5"></circle>
          <path d="M20.27 17.27 22 19"></path>
        </svg>
      ),
      features: [
        "Processes 100+ page documents in seconds",
        "Detects sentiment patterns across earnings calls",
        "Identifies non-obvious connections between companies",
        "Synthesizes insights from multiple data sources"
      ],
      background: "bg-gradient-to-br from-blue-900 to-indigo-900"
    },
    {
      title: "Due Diligence Acceleration",
      description: "Streamline document-heavy due diligence by automatically extracting key data points from contracts, financial statements, and regulatory filings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="14.5 2.5 19 7 14.5 11.5"></polyline>
          <rect x="3" y="2.5" width="12" height="9" rx="1"></rect>
          <path d="M3 16.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9"></path>
        </svg>
      ),
      features: [
        "Extracts key terms from legal documents",
        "Flags inconsistencies across deal documentation", 
        "Automates financial statement analysis",
        "Creates comprehensive risk assessment reports"
      ],
      background: "bg-gradient-to-br from-purple-900 to-indigo-900"
    },
    {
      title: "Portfolio Analytics",
      description: "Enhance portfolio insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="m6 14 8-10 4 6"></path>
        </svg>
      ),
      features: [
        "Multi-factor correlation analysis",
        "Automated performance attribution",
        "Scenario modeling with ML predictions",
        "Custom benchmarking with adaptive metrics"
      ],
      background: "bg-gradient-to-br from-indigo-900 to-blue-900"
    },
    {
      title: "Market Trend Analysis",
      description: "Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data to gain market insights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      features: [
        "Real-time sentiment analysis of news and social media",
        "Pattern detection across disparate data sources",
        "Sector rotation prediction with confidence scoring",
        "Automated alert system for anomaly detection"
      ],
      background: "bg-gradient-to-br from-sky-900 to-blue-900"
    },
    {
      title: "Regulatory Compliance AI",
      description: "Stay ahead of regulatory requirements with AI that monitors rule changes, identifies compliance gaps, and automates reporting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      ),
      features: [
        "Continuous monitoring of regulatory changes",
        "Automated gap analysis against current controls",
        "Pre-built templates for SEC, FINRA filings",
        "AI-powered document verification"
      ],
      background: "bg-gradient-to-br from-blue-900 to-sky-900"
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // SVG connector points
  const connectorPoints = [
    { x: 30, y: 0 },
    { x: 150, y: 30 },
    { x: 300, y: 15 },
    { x: 450, y: 40 },
    { x: 570, y: 20 }
  ];

  // Animation for data flow in SVG
  const dataPoints = Array(20).fill().map((_, i) => ({
    id: i,
    position: Math.random() * 100,
    speed: Math.random() * 2 + 1,
    size: Math.random() * 4 + 2
  }));
  
  const [flowPoints, setFlowPoints] = useState(dataPoints);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowPoints(points => 
        points.map(point => ({
          ...point,
          position: (point.position + point.speed) % 100
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Capabilities</span></h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Our enterprise-grade AI solutions transform every aspect of the investment lifecycle, delivering measurable business outcomes.
          </p>
        </motion.div>

        {/* Capabilities Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {/* Neural network visual connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-900 -translate-y-1/2 hidden md:block">
            <svg width="100%" height="100" className="absolute top-1/2 -translate-y-1/2" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Animated data flow particles */}
              {flowPoints.map(point => (
                <circle 
                  key={point.id}
                  r={point.size}
                  cx={`${point.position}%`}
                  cy="0"
                  fill="#60a5fa"
                  opacity="0.7"
                >
                  <animate 
                    attributeName="opacity"
                    values="0.7;0.2;0.7"
                    dur={`${point.speed * 2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
              
              <path 
                d="M0,0 Q200,30 400,0 T800,0" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="2"
              />
            </svg>
          </div>
          
          {capabilities.map((capability, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 border relative z-10 ${
                activeCapability === index
                  ? 'bg-gray-800 border-blue-500 shadow-glow text-white'
                  : 'bg-gray-800 bg-opacity-50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
              }`}
              onClick={() => setActiveCapability(index)}
            >
              {capability.title}
            </motion.button>
          ))}
        </div>

        {/* Active Capability Showcase */}
        <motion.div
          key={activeCapability}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${capabilities[activeCapability].background} rounded-xl overflow-hidden shadow-xl border border-gray-700 relative z-10`}
        >
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <div className="p-3 bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center text-blue-300 mb-6">
                {capabilities[activeCapability].icon}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">{capabilities[activeCapability].title}</h3>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6"></div>
              
              <p className="text-blue-100 text-lg mb-8">{capabilities[activeCapability].description}</p>
              
              <button className="w-fit px-6 py-3 rounded-lg bg-blue-600 bg-opacity-20 border border-blue-500 text-white hover:bg-blue-900 transition-colors flex items-center">
                Explore Capability
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-semibold text-white mb-6">Key Features</h4>
              <motion.div 
                className="grid grid-cols-1 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {capabilities[activeCapability].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={childVariants}
                    className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-800 hover:border-blue-500 transition-all duration-300 hover:shadow-glow"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-blue-500 bg-opacity-20 border border-blue-400">
                        <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">{feature}</h5>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AICapabilitiesSection;