import React, { useState } from 'react';

/**
 * A simplified Cross-Domain Navigation component
 * Shows a simple button that reveals domain information when clicked
 */
const SimplifiedCrossDomainNavigation = ({ 
  currentDomain = 'ai', // 'ai' or 'io'
  onNavigate = () => {} // callback for navigation events
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine the IO site URL based on environment
  const ioSiteUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://itiliti.io';
  
  // Domain data
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
  
  // Current and alternative domains
  const altDomain = currentDomain === 'ai' ? 'io' : 'ai';
  const altDomainData = domains[altDomain];
  const currentDomainData = domains[currentDomain];
  
  // Handle domain switch
  const handleDomainSwitch = (e) => {
    e.preventDefault();
    onNavigate(altDomainData.url);
  };
  
  // Toggle the info panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      {!isOpen ? (
        // Simple toggle button when closed
        <button
          onClick={togglePanel}
          className={`flex items-center space-x-1 px-3 py-2 rounded-lg bg-${currentDomainData.color}-600 text-white shadow-md hover:shadow-lg transition-all duration-200`}
          title="Domain Information"
        >
          <span className="font-medium">ITILITI</span>
          <span className={`text-${currentDomainData.color}-300`}>.{currentDomain}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      ) : (
        // Information panel when open
        <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden w-64">
          {/* Current domain info */}
          <div className="p-4 border-b border-gray-800">
            <div className="font-medium text-white mb-1">You're viewing</div>
            <div className="text-xl font-bold text-white">
              ITILITI<span className={`text-${currentDomainData.color}-400`}>.{currentDomain}</span>
            </div>
            <div className="text-gray-400 text-sm">{currentDomainData.description}</div>
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
            
            {/* Close button */}
            <button 
              onClick={togglePanel}
              className="w-full mt-3 py-2 text-center text-gray-400 hover:text-white text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimplifiedCrossDomainNavigation;