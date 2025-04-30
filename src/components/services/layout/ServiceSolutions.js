// src/components/services/layout/ServiceSolutions.js
import React, { useState, useEffect, useRef } from 'react';
import { CheckSquare, ArrowRight, ArrowUpRight, Star, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationModal from '../../../components/ConsultationModal';

const ServiceSolutions = ({ title, serviceOfferings, category }) => {
  const [activeOffering, setActiveOffering] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const solutionsRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll animation detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = solutionsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Validate props
  if (!serviceOfferings || !Array.isArray(serviceOfferings) || serviceOfferings.length === 0) {
    console.error('ServiceSolutions: serviceOfferings prop is missing or not an array');
    return <div className="p-8 text-center">Loading solutions data...</div>;
  }

  // Toggle expanded state for a card
  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Glassmorphism styles
  const glassStyles = {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const expandVariants = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    }
  };

  // Split title for enhanced visual treatment
  const titleWords = title.split(' ');
  const firstHalf = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
  const secondHalf = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

  return (
    <div ref={solutionsRef}>
      <motion.div 
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced Visual Title Treatment */}
        <motion.div 
    className="max-w-3xl mx-auto mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6 }}
  >
    {/* Enhanced Title Treatment */}
    <div className="text-center mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
      >
        SOLUTIONS
      </motion.div>
      
      <h2 className="relative inline-block">
        <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
          Our {title}
        </span>
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <motion.div 
          className="absolute -z-10 -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-70 blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70 blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </h2>
      
      <motion.p 
        className="text-xl text-gray-700 max-w-3xl mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        We've developed specialized capabilities tailored to the unique needs of alternative investment firms, 
        delivering enterprise-grade solutions at boutique scale.
      </motion.p>
    </div>
  </motion.div>
      
        {/* Interactive Solutions Tabs */}
        <motion.div 
          className="mb-16 bg-gray-50 rounded-xl overflow-hidden"
          style={{
            ...glassStyles,
            background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.8), rgba(243, 244, 246, 0.8))'
          }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Tabs Navigation */}
            <div className="md:w-1/3 bg-gradient-to-b from-gray-100 to-white border-r border-gray-200">
              <div className="p-1">
                {serviceOfferings.map((offering, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOffering(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start ${
                      activeOffering === index
                        ? 'bg-blue-50 shadow-sm'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`mr-4 p-2 rounded-lg ${
                      activeOffering === index ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {offering.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        activeOffering === index ? 'text-blue-700' : 'text-gray-800'
                      }`}>
                        {offering.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{offering.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Area */}
            <div className="md:w-2/3 p-6 md:p-8">
              <motion.div
                key={activeOffering}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    {serviceOfferings[activeOffering].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {serviceOfferings[activeOffering].title}
                    </h3>
                    <p className="text-gray-700">
                      {serviceOfferings[activeOffering].description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6" style={glassStyles}>
                  <h4 className="font-medium text-gray-800 mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    {serviceOfferings[activeOffering].capabilities.map((capability, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
                    Learn more about this solution
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* All Solutions Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {serviceOfferings.map((offering, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all"
              style={glassStyles}
              whileHover={!expandedCards[index] ? {
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              } : {}}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {offering.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{offering.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{offering.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-800">Key Capabilities:</h4>
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {offering.capabilities.length} features
                    </span>
                  </div>

                  {/* Always visible capabilities (first 2) */}
                  <ul className="space-y-2">
                    {offering.capabilities.slice(0, 2).map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{capability}</span>
                      </li>
                    ))}

                    {/* Expandable capabilities section */}
                    {offering.capabilities.length > 2 && (
                      <>
                        <AnimatePresence>
                          {expandedCards[index] && (
                            <motion.div
                              variants={expandVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <ul className="space-y-2 mt-2">
                                {offering.capabilities.slice(2).map((capability, idx) => (
                                  <motion.li 
                                    key={idx}
                                    className="flex items-start"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{capability}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Toggle button */}
                        <li className="flex items-center text-blue-600 font-medium mt-4">
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="flex items-center hover:text-blue-700 transition-colors"
                            aria-expanded={expandedCards[index]}
                          >
                            {expandedCards[index] ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                <span>Show less</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                <span>Show all {offering.capabilities.length - 2} more</span>
                              </>
                            )}
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Competitive Advantage Section */}
        <motion.div
          className="mt-16 rounded-xl overflow-hidden"
          style={{
            ...glassStyles,
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(30, 64, 175, 0.95))'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Competitive Advantage</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-300 mr-3" />
                  <h4 className="text-xl font-semibold">Against Generic MSPs</h4>
                </div>
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
              </motion.div>
              
              <motion.div
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-300 mr-3" />
                  <h4 className="text-xl font-semibold">Against Enterprise Providers</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span>Right-sized for boutique firms vs. enterprise-scale complexity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span>Streamlined approach vs. lengthy enterprise deployments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span>Appropriate pricing for current AUM vs. enterprise pricing models</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Consultation Modal */}
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </motion.div>
    </div>
  );
};

export default ServiceSolutions;