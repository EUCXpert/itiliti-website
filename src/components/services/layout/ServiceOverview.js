// src/components/services/layout/ServiceOverview.js
import React, { useState, useEffect, useRef } from 'react';
import { Shield, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../../data/services/serviceCategories';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceOverview = ({ title, challenges, keyFeatures, metrics }) => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const overviewRef = useRef(null);

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

    if (overviewRef.current) {
      observer.observe(overviewRef.current);
    }

    return () => {
      if (overviewRef.current) {
        observer.unobserve(overviewRef.current);
      }
    };
  }, []);

  // Auto-rotate challenges every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % challenges.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [challenges.length]);

  // Navigate challenges
  const nextChallenge = () => {
    setActiveChallenge((prev) => (prev + 1) % challenges.length);
  };

  const prevChallenge = () => {
    setActiveChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);
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
        staggerChildren: 0.2
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

  // Split title for enhanced visual treatment
  const titleWords = title.split(' ');
  const firstPart = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
  const secondPart = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

  return (
    <div ref={overviewRef}>
      <motion.div 
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced Title Treatment */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            OVERVIEW
          </motion.div>
          
          <h2 className="relative inline-block">
            <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              The {firstPart}
            </span>
            {secondPart && (
              <motion.span 
                className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {secondPart}
              </motion.span>
            )}
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
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Alternative investment firms face unique challenges that generic solutions fail to address. 
            Our specialized approach delivers enterprise-grade capabilities at a scale and cost appropriate for boutique firms.
          </motion.p>
        </div>
      
        {/* Interactive Challenge Carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl relative overflow-hidden" style={glassStyles}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-800">Key Challenges</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevChallenge} 
                    className="p-2 rounded-full bg-white hover:bg-blue-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-blue-600" />
                  </button>
                  <button 
                    onClick={nextChallenge} 
                    className="p-2 rounded-full bg-white hover:bg-blue-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0 hidden md:block">
                  {challenges[activeChallenge].icon}
                </div>
                
                <div className="flex-grow">
                  <motion.div
                    key={activeChallenge}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="text-xl font-semibold mb-3">{challenges[activeChallenge].title}</h4>
                    <p className="text-gray-700 mb-6">{challenges[activeChallenge].description}</p>
                  </motion.div>
                  
                  <div className="flex space-x-2 mt-4">
                    {challenges.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveChallenge(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === activeChallenge ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-label={`View challenge ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* All Challenges Grid - Mobile Friendly */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl hover:shadow-lg transition-shadow p-6 flex items-start gap-5"
              style={{
                ...glassStyles,
                transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
                transition: 'transform 0.3s ease-out'
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                {challenge.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
                    
        {/* Key Metrics Section - Enhanced with glassmorphism */}
        <motion.div 
          className="rounded-xl p-8 my-16"
          style={{
            ...glassStyles,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.2))'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
            <div className="p-4 bg-blue-600 rounded-full text-white flex-shrink-0 md:mt-2">
              <Shield className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{keyFeatures.title}</h3>
              <p className="text-gray-700 mb-10">{keyFeatures.description}</p>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {metrics.map((metric, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                    style={glassStyles}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Value Proposition Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8 mt-12"
          style={{
            ...glassStyles,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(79, 70, 229, 0.95))'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to overcome these challenges?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our tailored approach delivers enterprise-grade solutions that address your specific needs
              without the enterprise complexity or cost.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceOverview;