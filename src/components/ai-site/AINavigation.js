import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AINavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
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
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="relative">
                <div className="flex items-center">
                  <div className="text-white font-bold text-xl">
                    ITILITI<span className="text-blue-400">.ai</span>
                  </div>
                  
                  {/* Animated glow effect behind logo */}
                  <div className="absolute -inset-1 bg-blue-500 rounded-full filter blur-lg opacity-30 animate-pulse"></div>
                </div>
              </div>
            </a>
            
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