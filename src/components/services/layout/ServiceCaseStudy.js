// src/components/services/layout/ServiceCaseStudy.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckSquare, 
  ArrowUpRight, 
  Trophy, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building,
  Users,
  Calendar, 
  DollarSign,
  BarChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCaseStudy = ({ title, caseStudy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const caseStudyRef = useRef(null);

  // Detect when component becomes visible - hook called unconditionally
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (caseStudyRef.current) {
      observer.observe(caseStudyRef.current);
    }

    return () => {
      if (caseStudyRef.current) {
        observer.unobserve(caseStudyRef.current);
      }
    };
  }, []);

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

  // Glassmorphism styles
  const glassStyles = {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  };

  // Return early if no case study data is provided
  if (!caseStudy) {
    return null;
  }

  // Get next/previous steps
  const nextStep = () => {
    setActiveStep((prev) => 
      prev < caseStudy.approach.length - 1 ? prev + 1 : prev
    );
  };

  const prevStep = () => {
    setActiveStep((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <div ref={caseStudyRef} className="max-w-5xl mx-auto">
      
  {/* Enhanced Title with Visual Elements */}
  <div className="max-w-3xl mx-auto mb-12">
    <div className="text-center mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
      >
        <Trophy className="w-4 h-4 mr-2" />
        SUCCESS STORY
      </motion.div>
      
      <h2 className="relative inline-block">
        <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
          {caseStudy.title}
        </span>
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <motion.div 
          className="absolute -z-10 -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-70 blur-xl"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70 blur-xl"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </h2>
      
      <motion.p 
        className="text-xl text-gray-700 max-w-3xl mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        How we helped {caseStudy.firmType} transform their operations with our {title} solution
      </motion.p>
    </div>
  </div>

      {/* Case Study Content with Enhanced Visuals */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Client Profile Section */}
          <motion.div 
            className="lg:w-1/3 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl font-bold mb-6 border-b border-white border-opacity-20 pb-4"
                variants={itemVariants}
              >
                {caseStudy.firmType}
              </motion.h3>
              
              <motion.div 
                className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm mb-8"
                variants={itemVariants}
              >
                <div className="font-medium mb-3 flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <span>Client Profile</span>
                </div>
                <ul className="space-y-4 text-sm">
                  {caseStudy.profile.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      {item.icon}
                      <span className="text-white text-opacity-90">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <div className="font-medium mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Challenge</span>
                </div>
                <p className="text-sm text-white text-opacity-90 bg-black bg-opacity-20 p-4 rounded-lg">
                  {caseStudy.challenge}
                </p>
              </motion.div>

              {/* Timeline Indicator */}
              <motion.div 
                className="hidden lg:block mt-12"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="font-medium mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  {caseStudy.approach.map((_, index) => (
                    <motion.div 
                      key={index} 
                      className={`h-2 rounded-full ${
                        index === activeStep ? 'w-8 bg-white' : 'w-2 bg-white bg-opacity-30'
                      } transition-all duration-300`}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setActiveStep(index)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
                <div className="mt-4 text-sm text-white text-opacity-80">
                  Step {activeStep + 1} of {caseStudy.approach.length}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Details Section */}
          <motion.div 
            className="lg:w-2/3 p-8 lg:p-10"
            variants={itemVariants}
          >
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Trophy className="w-5 h-5" />
                  </motion.span>
                </span>
                Our Approach
              </h4>
              
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {activeStep + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-2">
                          {caseStudy.approach[activeStep].includes(':') ? 
                            `Step ${activeStep + 1}: ${caseStudy.approach[activeStep].split(':')[0]}` : 
                            `Step ${activeStep + 1}`}
                        </h5>
                        <p className="text-gray-700">
                          {caseStudy.approach[activeStep].includes(':') ?
                            caseStudy.approach[activeStep].split(':')[1] : 
                            caseStudy.approach[activeStep]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Step Navigation */}
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={prevStep}
                    className={`p-2 rounded-full ${
                      activeStep === 0 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    } transition-colors`}
                    disabled={activeStep === 0}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextStep}
                    className={`p-2 rounded-full ${
                      activeStep === caseStudy.approach.length - 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    } transition-colors`}
                    disabled={activeStep === caseStudy.approach.length - 1}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mt-10 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-4">
                  <BarChart className="w-5 h-5" />
                </span>
                Measurable Results
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {caseStudy.results.map((result, index) => (
                  <motion.div 
                    key={index} 
                    className="relative overflow-hidden rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 opacity-10" />
                    <div className="border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-lg text-center relative z-10">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">{result.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Testimonial */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-100 rounded-full opacity-50 transform -translate-x-6 -translate-y-6" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-100 rounded-full opacity-40 transform translate-x-6 translate-y-6" />
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 relative shadow-sm">
                <div className="absolute -top-4 -left-2 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <blockquote className="italic text-gray-700 pl-6 py-2 mb-6 text-lg relative z-10">
                  "{caseStudy.quote}"
                </blockquote>
                
                <div className="flex items-center pl-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    {/* Placeholder for author image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {caseStudy.author.title[0]}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-blue-600">{caseStudy.author.title}</div>
                    <div className="text-sm text-gray-600">{caseStudy.author.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced CTA */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden shadow-lg relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="20" cy="20" r="3.5" fill="#fff"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>

        <div className="p-8 text-center relative z-10">
          <motion.h3 
            className="text-2xl font-bold mb-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Ready to achieve similar results?
          </motion.h3>
          
          <motion.p 
            className="mb-8 text-blue-100 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            Let's discuss how our {title} can transform your operations and drive measurable improvements to your bottom line.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="bg-white hover:bg-blue-50 text-blue-700 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </motion.button>
            
            <motion.button 
              className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View More Case Studies
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCaseStudy;