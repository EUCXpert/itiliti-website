// src/components/services/ServiceApproach.js
import React, { useState, useEffect, useRef } from 'react';
import { CheckSquare, ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceApproach = ({ title }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const approachRef = useRef(null);
  
  // Define phases data
  const phases = [
    {
      id: 1,
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current environment, challenges, and strategic goals to define the path forward.",
      steps: [
        "Technology environment assessment",
        "Security posture evaluation",
        "Investment workflow analysis"
      ]
    },
    {
      id: 2,
      title: "Strategic Planning",
      description: "Development of a tailored technology strategy aligned with your investment operations and growth objectives.",
      steps: [
        "Strategic roadmap development",
        "Implementation planning",
        "ROI analysis and projection"
      ]
    },
    {
      id: 3,
      title: "Implementation",
      description: "Structured execution that prioritizes critical components while minimizing disruption to your investment operations.",
      steps: [
        "Phased deployment approach",
        "Trading-hour aware scheduling",
        "Change management with minimal disruption"
      ]
    },
    {
      id: 4,
      title: "Continuous Optimization",
      description: "Ongoing refinement and improvement to ensure maximum value and adaptation to your evolving requirements.",
      steps: [
        "Ongoing optimization and refinement",
        "Quarterly strategic reviews",
        "ROI measurement and reporting"
      ]
    }
  ];

  // Detect when approach section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (approachRef.current) {
      observer.observe(approachRef.current);
    }

    return () => {
      if (approachRef.current) {
        observer.unobserve(approachRef.current);
      }
    };
  }, []);

  // Auto-rotate phases every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [phases.length]);

  // Navigate phases
  const nextPhase = () => {
    setActivePhase((prev) => (prev + 1) % phases.length);
  };

  const prevPhase = () => {
    setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div ref={approachRef}>
      <motion.div 
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Implementation Approach</h2>
        <p className="text-xl text-gray-700 mb-8">
          A structured methodology that delivers immediate value while building toward long-term strategic goals, 
          designed specifically for alternative investment firms.
        </p>
      </motion.div>
      
      {/* Interactive Phase Carousel */}
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
              <h3 className="text-2xl font-bold text-blue-800">Implementation Phases</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={prevPhase} 
                  className="p-2 rounded-full bg-white hover:bg-blue-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={nextPhase} 
                  className="p-2 rounded-full bg-white hover:bg-blue-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0 hidden md:flex items-center justify-center">
                <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">
                  {phases[activePhase].id}
                </div>
              </div>
              
              <div className="flex-grow">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xl font-semibold mb-3">{phases[activePhase].title}</h4>
                  <p className="text-gray-700 mb-6">{phases[activePhase].description}</p>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <ul className="space-y-2">
                      {phases[activePhase].steps.map((step, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                          <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <div className="flex space-x-2 mt-4">
                  {phases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePhase(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activePhase ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`View phase ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* All Phases Grid */}
      <motion.div 
        className="max-w-5xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              className="relative z-10 mb-16"
              variants={itemVariants}
            >
              <div className="md:flex items-center">
                <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 order-1'}`}>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                
                <div className="hidden md:flex justify-center items-center">
                  <motion.div 
                    className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {phase.id}
                  </motion.div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right order-0'}`}>
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-md"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <ul className="space-y-2">
                      {phase.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Value Proposition Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8 mt-12 max-w-5xl mx-auto"
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
          <h3 className="text-2xl font-bold mb-3">Ready to start your implementation journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our structured approach ensures a smooth transition with minimal disruption
            to your investment operations.
          </p>
          <motion.button 
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceApproach;