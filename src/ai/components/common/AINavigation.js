import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AINavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  
  // Determine the IO site URL based on environment
  const ioSiteUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://itiliti.io';
  
  // Domain data (moved from CrossDomainNavigationSimple)
  const domains = {
    ai: {
      name: 'ITILITI.ai',
      description: 'AI solutions for alternative investment',
      url: process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001' 
        : 'https://itiliti.ai',
      color: 'blue'
    },
    io: {
      name: 'ITILITI.io',
      description: 'IT services for alternative investment',
      url: ioSiteUrl,
      color: 'indigo'
    }
  };
  
  // Current domain is 'ai' since we're in the AI application
  const currentDomain = 'ai';
  const altDomain = 'io';
  const altDomainData = domains[altDomain];
  
  // Handle domain navigation
  const handleDomainSwitch = (e) => {
    e.preventDefault();
    window.location.href = altDomainData.url;
  };
  
  // Change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
      
      // Also close domain dropdown when clicking outside
      if (domainDropdownOpen && !e.target.closest('.domain-dropdown') && !e.target.closest('.logo-button')) {
        setDomainDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen, domainDropdownOpen]);
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions',
      submenu: [
        { name: 'Research Enhancement', path: '/solutions/research' },
        { name: 'Due Diligence Acceleration', path: '/solutions/due-diligence' },
        { name: 'Portfolio Analytics', path: '/solutions/portfolio' },
        { name: 'Market Trend Analysis', path: '/solutions/market-trends' },
        { name: 'All Solutions', path: '/solutions' }
      ] 
    },
    { name: 'Outcomes', path: '/outcomes' },
    { name: 'Partners', path: '/partners' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' }
  ];
  
  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 bg-opacity-95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with dropdown */}
            <div className="relative logo-button">
              <button 
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center focus:outline-none"
                aria-label="Toggle domain dropdown"
              >
                <div className="relative">
                  <div className="flex items-center">
                    <div className="text-white font-bold text-xl flex items-center">
                      ITILITI
                      <span className="text-blue-400">.{currentDomain}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 text-gray-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Animated glow effect behind logo */}
                    <div className="absolute -inset-1 bg-blue-500 rounded-full filter blur-lg opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </button>
              
              {/* Domain Dropdown */}
              <AnimatePresence>
                {domainDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden w-64 domain-dropdown z-50"
                  >
                    {/* Current domain info */}
                    <div className="p-4 border-b border-gray-800">
                      <div className="font-medium text-white mb-1">You're viewing</div>
                      <div className="text-xl font-bold text-white">
                        ITILITI<span className={`text-${domains[currentDomain].color}-400`}>.{currentDomain}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{domains[currentDomain].description}</div>
                    </div>
                    
                    {/* Alternative domain info */}
                    <div className="p-4">
                      <div className="text-sm text-gray-400 mb-2">Also available:</div>
                      <a
                        href={altDomainData.url}
                        onClick={handleDomainSwitch}
                        className={`flex items-center p-3 rounded-lg bg-gray-800 hover:bg-${altDomainData.color}-900 hover:bg-opacity-30 border border-gray-700 hover:border-${altDomainData.color}-700 transition-colors group`}
                      >
                        <div className="mr-3">
                          <div className={`w-10 h-10 rounded-full bg-${altDomainData.color}-900 bg-opacity-30 flex items-center justify-center border border-${altDomainData.color}-700`}>
                            <span className={`text-${altDomainData.color}-400 font-medium`}>.{altDomain}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-blue-300 transition-colors">
                            {altDomainData.name}
                          </div>
                          <div className="text-gray-400 text-sm">{altDomainData.description}</div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <a
                    href={link.path}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800 hover:bg-opacity-50"
                  >
                    {link.name}
                    
                    {/* Show dropdown arrow if submenu exists */}
                    {link.submenu && (
                      <svg className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {/* Dropdown menu */}
                  {link.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 py-2 overflow-hidden">
                        {link.submenu.map((subLink, i) => (
                          <a
                            key={i}
                            href={subLink.path}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <button className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-glow transition-all duration-300">
                Demo
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white focus:outline-none menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg z-40 border-t border-gray-800 mobile-menu md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              {/* Domain switcher (mobile) */}
              <div className="mb-4 pb-4 border-b border-gray-800">
                <div className="text-sm text-gray-400 mb-2">Switch to:</div>
                <a
                  href={altDomainData.url}
                  onClick={handleDomainSwitch}
                  className={`flex items-center p-3 rounded-lg bg-gray-800 hover:bg-${altDomainData.color}-900 hover:bg-opacity-30 border border-gray-700 hover:border-${altDomainData.color}-700 transition-colors`}
                >
                  <div className="mr-3">
                    <div className={`w-10 h-10 rounded-full bg-${altDomainData.color}-900 bg-opacity-30 flex items-center justify-center border border-${altDomainData.color}-700`}>
                      <span className={`text-${altDomainData.color}-400 font-medium`}>.{altDomain}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {altDomainData.name}
                    </div>
                    <div className="text-gray-400 text-sm">{altDomainData.description}</div>
                  </div>
                </a>
              </div>
              
              {/* Navigation links */}
              {navLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.path}
                    className="block py-3 text-gray-300 hover:text-white transition-colors border-b border-gray-800"
                    onClick={() => !link.submenu && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  
                  {/* Mobile submenu */}
                  {link.submenu && (
                    <div className="pl-4 py-2 space-y-2 border-b border-gray-800">
                      {link.submenu.map((subLink, i) => (
                        <a
                          key={i}
                          href={subLink.path}
                          className="block py-2 text-gray-400 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Style for glow effect */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </>
  );
};

export default AINavigation;