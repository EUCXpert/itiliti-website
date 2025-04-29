// src/components/services/ServiceFAQ.js
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceFAQ = ({ title, faqs = [] }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);
  
  // Detect when FAQ section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = faqRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  // Filter FAQs based on search query
  useEffect(() => {
    // Handle empty faqs array
    if (!faqs || !Array.isArray(faqs)) {
      setFilteredFaqs([]);
      return;
    }
    
    if (!searchQuery.trim()) {
      setFilteredFaqs(faqs);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
    );
    
    setFilteredFaqs(filtered);
  }, [searchQuery, faqs]);
  
  // Toggle FAQ expansion
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
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
  
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  // Helper function to highlight search terms in the answer
  const highlightSearchTerms = (text, searchQuery) => {
    if (!searchQuery.trim()) return text;
    
    const regex = new RegExp(`(${searchQuery.trim()})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-100 px-1 rounded">$1</mark>');
  };

  // Return null if no FAQs are provided (after all hooks are defined)
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  return (
    <div ref={faqRef} className="py-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center mb-4 bg-blue-100 p-3 rounded-full">
          <MessageSquare className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700 mb-8">
          Find answers to common questions about our {title} solutions.
        </p>
        
        {/* Search bar with animation */}
        <motion.div 
          className="max-w-md mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)'
              }}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
          {/* Search results count */}
          {searchQuery && (
            <motion.div 
              className="text-sm text-gray-500 mt-2 text-left px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFaqs.length === 0 ? (
                "No matching questions found"
              ) : (
                `Found ${filteredFaqs.length} matching question${filteredFaqs.length !== 1 ? 's' : ''}`
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      {/* FAQ list with animations */}
      <motion.div 
        className="max-w-3xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {filteredFaqs.map((faq) => (
          <motion.div 
            key={faq.id} 
            className="bg-white rounded-xl overflow-hidden"
            style={glassStyles}
            variants={itemVariants}
            whileHover={{ 
              y: -3,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <button 
              className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors"
              onClick={() => toggleFaq(faq.id)}
              aria-expanded={expandedFaq === faq.id}
            >
              <div className="flex items-start flex-1">
                <div className="mr-4 flex-shrink-0 p-2 bg-blue-100 rounded-full">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium">{faq.question}</h3>
              </div>
              <div className="ml-4 flex-shrink-0 p-2 rounded-full bg-gray-100">
                {expandedFaq === faq.id ? 
                  <ChevronUp className="w-5 h-5 text-blue-600" /> : 
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                }
              </div>
            </button>
            
            <AnimatePresence>
              {expandedFaq === faq.id && (
                <motion.div 
                  className="overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { height: 0, opacity: 0 },
                    visible: { 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }
                  }}
                >
                  <div className="p-6 pt-0 border-t border-gray-100 bg-white">
                    <motion.div 
                      variants={fadeInVariants}
                      className="text-gray-700 prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: highlightSearchTerms(faq.answer, searchQuery) }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Still have questions section */}
      <motion.div 
        className="max-w-3xl mx-auto mt-12 p-8 rounded-xl text-center"
        style={{
          ...glassStyles,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.2))'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
        <p className="text-gray-700 mb-6">
          Our team is ready to help you find the perfect solution for your needs.
        </p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ServiceFAQ;