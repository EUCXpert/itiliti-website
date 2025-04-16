import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import FloatingCTAButton from './FloatingCTAButton';
import ScheduleButton from './ScheduleButton';
import EnhancedAnnouncement from './EnhancedAnnouncement';

const Navigation = ({ 
  transparent = false, 
  dark = false, 
  hideOnScroll = false,
  announcement = null,
  showFloatingCTA = false,
  showNavCTA = false
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimer, setScrollTimer] = useState(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Determine the AI site URL based on environment
  const aiSiteUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'https://itiliti.ai';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolling state to true whenever scroll happens
      setIsScrolling(true);
      
      // Clear any existing timers
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      
      // Set a new timer to detect when scrolling stops
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust this timeout value to determine how quickly the menu reappears after scrolling
      
      setScrollTimer(timer);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [scrollTimer]);

  // Determine background and text color based on props and scroll state
  let bgColor = 'bg-white';
  let textColor = 'text-gray-700';
  let navOpacity = '1';
  
  if (transparent) {
    if (isScrolling) {
      // When scrolling: transparent
      bgColor = 'bg-transparent';
      textColor = dark ? 'text-white' : 'text-gray-700';
      navOpacity = '0.7'; // Semi-transparent during scroll
    } else {
      // When not scrolling: solid background
      bgColor = 'bg-white';
      textColor = 'text-gray-700';
      navOpacity = '1';
    }
  }

  // Add shadow when not in transparent mode
  const shadowClass = !isScrolling || !transparent ? 'shadow-md' : '';

  return (
    <>
      {/* Enhanced Announcement Banner with Text Effects */}
      {announcement && showAnnouncement && (
        <EnhancedAnnouncement 
          text={announcement.text}
          link={announcement.link}
          variant={announcement.variant || 'info'}
          typingSpeed={20}
          dismissible={true}
          onDismiss={() => setShowAnnouncement(false)}
          showCountdown={announcement.showCountdown}
          countdownDate={announcement.countdownDate}
        />
      )}
      
      <nav 
        className={`sticky top-0 z-50 ${shadowClass} transition-all duration-300 ${bgColor}`}
        style={{ opacity: navOpacity }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="mr-10">
                <img 
                  src={isScrolling && transparent && dark ? "/logo-white.svg" : "/logo.svg"} 
                  alt="ModernMSP Logo" 
                  className="h-10" 
                />
              </Link>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-8">
                <li><Link to="/" className={`font-medium ${textColor} hover:text-blue-500`}>Home</Link></li>
                <li className="group relative">
                  <Link to="/services" className={`font-medium ${textColor} hover:text-blue-500 flex items-center cursor-pointer pb-3`}>
                    Services <ArrowRight className="w-4 h-4 ml-1 transform rotate-90" />
                  </Link>
                  <div className="absolute left-0 top-full w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out z-50">
                    <div className="py-1">
                      <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold border-b border-gray-200">All Services</Link>
                      <Link to="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Security Foundation</Link>
                      <Link to="/microsoft-optimization" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Microsoft Optimization</Link>
                      <Link to="/cxo-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CxO Advisory Services</Link>
                      <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Solutions</Link>
                      <Link to="/electronic-message-archiving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Electronic Message Archiving</Link>
                      <Link to="/workflow-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automation</Link>
                    </div>
                  </div>
                </li>
                <li className="group relative">
                  <Link to="/segments" className={`font-medium ${textColor} hover:text-blue-500 flex items-center cursor-pointer pb-3`}>
                    Segments <ArrowRight className="w-4 h-4 ml-1 transform rotate-90" />
                  </Link>
                  <div className="absolute left-0 top-full w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out z-50">
                    <div className="py-1">
                      <Link to="/segments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold border-b border-gray-200">All Segments</Link>
                      <Link to="/segments/private-equity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Private Equity</Link>
                      <Link to="/segments/venture-capital" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Venture Capital</Link>
                      <Link to="/segments/family-offices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Family Offices</Link>
                      <Link to="/segments/real-estate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Real Estate</Link>
                    </div>
                  </div>
                </li>
                <li><Link to="/assessments" className={`font-medium ${textColor} hover:text-blue-500`}>Assessment Hub</Link></li>
                <li><Link to="/about-us" className={`font-medium ${textColor} hover:text-blue-500`}>About Us</Link></li>
                <li><Link to="/contact" className={`font-medium ${textColor} hover:text-blue-500`}>Contact</Link></li>
                <li>
                  <a 
                    href={aiSiteUrl} 
                    className="font-medium text-blue-600 hover:text-blue-700 flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ITILITI.ai
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${textColor} focus:outline-none`}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
            
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="space-y-4">
                <li><Link to="/" className="block font-medium text-gray-700">Home</Link></li>
                <li><Link to="/services" className="block font-medium text-gray-700">Services</Link></li>
                <li><Link to="/segments" className="block font-medium text-gray-700">Segments</Link></li>
                <li><Link to="/assessments" className="block font-medium text-gray-700">Assessment Hub</Link></li>
                <li><Link to="/about-us" className="block font-medium text-gray-700">About Us</Link></li>
                <li><Link to="/contact" className="block font-medium text-gray-700">Contact</Link></li>
                <li>
                  <a 
                    href={aiSiteUrl}
                    className="block font-medium text-blue-600"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ITILITI.ai
                  </a>
                </li>
                <li>
                  <ScheduleButton className="block w-full text-center" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      
      {/* Floating CTA Button */}
      {showFloatingCTA && <FloatingCTAButton />}
    </>
  );
};

export default Navigation;