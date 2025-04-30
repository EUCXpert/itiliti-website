// src/components/segments/layout/SegmentSolutions.js
import React, { useState, useEffect, useRef } from 'react';
import { CheckSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SegmentSolutions = ({ title, recommendedServices }) => {
  const [isVisible, setIsVisible] = useState(false);
  const solutionsRef = useRef(null);

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

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => {
      if (solutionsRef.current) {
        observer.unobserve(solutionsRef.current);
      }
    };
  }, []);

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

  return (
    <div ref={solutionsRef}>
      <motion.div 
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title Section */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
            >
              RECOMMENDED SOLUTIONS
            </motion.div>
            
            <h2 className="relative inline-block">
              <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Solutions for {title}
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
              We've carefully selected and customized these services to address the specific challenges and requirements of {title.toLowerCase()}.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Solutions Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {recommendedServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all"
              style={glassStyles}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for {title}:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
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
            <h3 className="text-2xl font-bold mb-3">Ready to implement these solutions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our specialized approach ensures your technology investment delivers maximum ROI for your {title.toLowerCase()} operations.
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

export default SegmentSolutions;