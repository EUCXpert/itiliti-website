import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PartnerProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Partner data
  const partners = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      description: 'Enterprise AI solutions powered by Azure OpenAI and Microsoft Copilot.',
      logo: '/Microsoft.png',
      accentColor: '#00a4ef',
      tagline: 'Accelerating AI adoption through enterprise-grade infrastructure'
    },
    {
      id: 'blueflame',
      name: 'BlueFlame.ai',
      description: 'Advanced Natural Language Processing for investment document analysis.',
      logo: '/BlueFlame.png',
      accentColor: '#3b82f6',
      tagline: 'Turning complex documents into actionable insights'
    },
    {
      id: 'apexhq',
      name: 'ApexHQ.ai',
      description: 'AI-driven investment research and market intelligence platform.',
      logo: '/Apex.svg',
      accentColor: '#8b5cf6',
      tagline: 'Uncovering hidden market opportunities with advanced AI'
    },
    {
      id: 'direktiv',
      name: 'Direktiv.io',
      description: 'Workflow automation with embedded AI for investment processes.',
      logo: '/Direktiv.svg',
      accentColor: '#ec4899',
      tagline: 'Streamlining complex workflows with intelligent automation'
    },
    {
      id: 'archtis',
      name: 'archTIS',
      description: 'AI-enhanced security and compliance for sensitive investment data.',
      logo: '/archTIS.svg',
      accentColor: '#10b981',
      tagline: 'Securing your most valuable data assets with AI-powered intelligence'
    }
  ];

  // Handle navigation with explicit handlers for debugging
  const handlePrevious = useCallback(() => {
    console.log("Previous button clicked");
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = partners.length - 1;
    }
    setDirection(-1);
    setActiveIndex(newIndex);
  }, [activeIndex, partners.length]);

  const handleNext = useCallback(() => {
    console.log("Next button clicked");
    let newIndex = activeIndex + 1;
    if (newIndex >= partners.length) {
      newIndex = 0;
    }
    setDirection(1);
    setActiveIndex(newIndex);
  }, [activeIndex, partners.length]);
  
  // Handle direct navigation to a specific index
  const handleDotNavigation = useCallback((index) => {
    const directionValue = index > activeIndex ? 1 : -1;
    setDirection(directionValue);
    setActiveIndex(index);
  }, [activeIndex]);

  // Active partner
  const activePartner = partners[activeIndex];

  // Animation variants for slides
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
    <div className="bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Powered by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Industry Leaders</span></h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            We partner with premier AI technology providers to deliver cutting-edge solutions tailored for alternative investment.
          </p>
        </motion.div>
        
        {/* Showcase container */}
        <div className="relative">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full rounded-full blur-3xl"
                 style={{ backgroundColor: activePartner.accentColor, transition: 'background-color 1s ease' }}></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full rounded-full blur-3xl"
                 style={{ backgroundColor: activePartner.accentColor, transition: 'background-color 1s ease', opacity: 0.5 }}></div>
          </div>
          
          {/* Partner showcase */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 relative"
              >
                {/* Dynamic border glow */}
                <div className="absolute inset-0 rounded-xl" 
                     style={{ 
                       boxShadow: `inset 0 0 0 1px ${activePartner.accentColor}30`,
                       transition: 'box-shadow 1s ease'
                     }}>
                </div>
                
                <div className="grid md:grid-cols-12 gap-8 p-8 items-center">
                  {/* Logo & Info section - 5 columns on desktop */}
                  <div className="md:col-span-5 space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center md:justify-start"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-md"
                             style={{ backgroundColor: activePartner.accentColor, opacity: 0.3 }}></div>
                        <div className="relative bg-gray-900 bg-opacity-60 p-6 rounded-xl border border-gray-700">
                          <img src={activePartner.logo} alt={activePartner.name} className="h-12 md:h-16" />
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-white text-center md:text-left">{activePartner.name}</h3>
                      <div 
                        className="h-1 w-20 rounded-full mt-2 mx-auto md:mx-0" 
                        style={{ backgroundColor: activePartner.accentColor }}
                      ></div>
                    </motion.div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-blue-100 text-lg text-center md:text-left"
                    >
                      {activePartner.description}
                    </motion.p>
                  </div>
                  
                  {/* Featured content section - 7 columns on desktop */}
                  <div className="md:col-span-7">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-700"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full p-2 mr-4 flex-shrink-0"
                             style={{ backgroundColor: `${activePartner.accentColor}20`, borderColor: activePartner.accentColor, borderWidth: '1px' }}>
                          <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: activePartner.accentColor }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">Partner Spotlight</h4>
                      </div>
                      
                      {/* Partner tagline */}
                      <blockquote className="text-2xl italic text-gray-300 mb-4 leading-relaxed">
                        "{activePartner.tagline}"
                      </blockquote>
                      
                      {/* Integration info */}
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-white text-sm">AI</div>
                            <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-white text-sm"
                                 style={{ backgroundColor: activePartner.accentColor }}>
                              {activePartner.name.substring(0, 2)}
                            </div>
                          </div>
                          <span className="ml-4 text-gray-400">Seamless Integration</span>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 rounded-lg border text-white transition-colors"
                          style={{ borderColor: activePartner.accentColor, backgroundColor: `${activePartner.accentColor}20` }}
                        >
                          <span className="flex items-center">
                            Explore Partnership
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Separate navigation controls with higher z-index */}
          <div className="relative z-20 max-w-6xl mx-auto">
            <div className="flex justify-between px-4 mt-4">
              <button
                type="button"
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center shadow-lg cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                type="button"
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center shadow-lg cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((partner, index) => (
              <button
                key={partner.id}
                onClick={() => handleDotNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Partner Logos Bar */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.button
                key={partner.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDotNavigation(index)}
                className={`grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 ${
                  activeIndex === index ? 'grayscale-0 opacity-100' : ''
                }`}
              >
                <img src={partner.logo} alt={partner.name} className="h-8 md:h-10" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProductShowcase;