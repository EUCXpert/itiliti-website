// src/components/services/layout/ServiceTabs.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Layers,
  Compass,
  MessageSquare,
  Users,
  Workflow,
  CheckSquare
} from 'lucide-react';

const ServiceTabs = ({ tabs, activeTab, onChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Add scroll detection for enhanced shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return early if no tabs
  if (!tabs || !Array.isArray(tabs)) {
    console.error('ServiceTabs: tabs prop is missing or not an array', tabs);
    return null;
  }

  // Map icons to tab IDs
  const getIconForTab = (tabId) => {
    switch (tabId) {
      case 'overview':
        return <Layers className="w-5 h-5" />;
      case 'solutions':
        return <Compass className="w-5 h-5" />;
      case 'approach':
        return <Workflow className="w-5 h-5" />;
      case 'casestudy':
        return <CheckSquare className="w-5 h-5" />;
      case 'faqs':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  // Container style with enhanced shadow based on scroll
  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease-in-out'
  };

  return (
    <div 
      className="bg-white sticky top-0 z-10"
      style={containerStyle}
    >
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto py-1">
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              className={`px-5 py-3 font-medium text-lg whitespace-nowrap transition-colors rounded-lg mx-1 flex items-center ${
                activeTab === tab.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => onChange(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className={`mr-2 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'}`}>
                {getIconForTab(tab.id)}
              </span>
              {tab.label}
              
              {/* Animated indicator for active tab */}
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  layoutId="activeTabIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;