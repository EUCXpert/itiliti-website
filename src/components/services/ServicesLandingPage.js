// src/components/services/ServicesLandingPage.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICE_CATEGORIES } from '../../data/services/serviceCategories';
import { SERVICES, SERVICE_IDS } from '../../data/services/serviceData';
import { ArrowRight } from 'lucide-react';

const ServicesLandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
  
  // Filter services by category
  const filteredServices = activeCategory === 'all' 
    ? Object.values(SERVICES) 
    : Object.values(SERVICES).filter(service => service.category === activeCategory);
  
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
          SERVICES
        </motion.div>
        
        <h1 className="relative inline-block text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            Our Specialized Solutions
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
          Tailored technology solutions designed specifically for alternative investment firms,
          delivering enterprise capabilities at boutique scale.
        </motion.p>
      </motion.div>
      
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button 
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          All Services
        </button>
        
        {Object.values(SERVICE_CATEGORIES).map(category => (
          <button 
            key={category.id}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      
      {/* Services Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {filteredServices.map((service) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            style={glassStyles}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-6">
              <div className="text-blue-600 mb-3">
                {/* Display the first icon from serviceOfferings as a preview */}
                {service.serviceOfferings[0].icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              <Link 
                to={`/services/${service.id}`} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
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
          <h3 className="text-2xl font-bold mb-3">Need a customized solution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team can help you identify the right combination of services
            to address your specific challenges.
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

export default ServicesLandingPage;