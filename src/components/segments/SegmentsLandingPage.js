// src/components/segments/SegmentsLandingPage.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEGMENTS, SEGMENT_IDS } from '../../data/segments/segmentData';
import { ArrowRight, Building, Users, Target } from 'lucide-react';

const SegmentsLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);
  
  // Similar intersection observer logic as ServiceOverview.js
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  return (
    <div ref={pageRef} className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
        >
          SEGMENTS
        </motion.div>
        
        <h1 className="relative inline-block text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            Industry-Specific Solutions
          </span>
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Technology solutions designed for the unique challenges and requirements 
          of specialized investment firms across various segments.
        </motion.p>
      </motion.div>
      
      {/* Segments Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {Object.values(SEGMENTS).map((segment) => (
          <motion.div 
            key={segment.id}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            style={glassStyles}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{segment.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{segment.subtitle}</p>
              <p className="text-gray-700 mb-8">{segment.description}</p>
              
              {/* Key Challenges Preview */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Key Challenges:</h4>
                <ul className="space-y-2">
                  {segment.challenges.slice(0, 3).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-blue-600 mt-1">
                        {challenge.icon}
                      </div>
                      <span className="text-gray-700">{challenge.title}</span>
                    </li>
                  ))}
                  {segment.challenges.length > 3 && (
                    <li className="text-blue-600 font-medium">+ {segment.challenges.length - 3} more challenges</li>
                  )}
                </ul>
              </div>
              
              {/* Case Study Preview */}
              {segment.caseStudy && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Case Study: {segment.caseStudy.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-3">
                    {segment.caseStudy.profile.map((item, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        {item.icon} <span className="ml-1">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <Link 
                to={`/segments/${segment.id}`} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View detailed solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Call to Action */}
      <motion.div 
        className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8"
        style={{
          ...glassStyles,
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(79, 70, 229, 0.95))'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Don't see your industry?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We provide tailored solutions for various types of investment firms.
            Contact us to discuss your specific requirements.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SegmentsLandingPage;