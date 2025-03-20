import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdvancedExitIntentPopup from './AdvancedExitIntentPopoup';

// Create a context to manage exit intent state across the app
const ExitIntentContext = createContext({
  enableExitIntent: () => {},
  disableExitIntent: () => {},
  isEnabled: true,
  setUserActivity: () => {},
  recordFormSubmission: () => {},
  setActiveVariation: () => {}
});

// Hook to use exit intent functionality
export const useExitIntent = () => useContext(ExitIntentContext);

// Configuration for which paths should show/hide exit intent
const EXIT_INTENT_CONFIG = {
  // Paths where exit intent should be disabled
  disabledPaths: [
    '/contact', // Don't show on contact page
    '/assessments', // Don't show on assessment hub or during assessments
    '/assessments/*', // Don't show on any assessment pages
  ],
  
  // Paths where we especially want to show the exit intent (e.g., high-value pages)
  highValuePaths: [
    '/security', // Security services page
    '/microsoft-optimization', // Microsoft optimization page
    '/segments/hedge-funds', // Hedge fund segment page
    '/segments/private-equity', // Private equity segment page
  ],

  // Content category mapping for targeted variations
  categoryMapping: {
    security: [
      '/security', 
      '/electronic-message-archiving', 
      '/segments/hedge-funds',
      '/regulatory-compliance'
    ],
    microsoft: [
      '/microsoft-optimization',
      '/cxo-services'
    ],
    ai: [
      '/ai-services'
    ],
    investment: [
      '/segments/*'
    ]
  }
};

export const ExitIntentProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [hasShownOnHighValuePage, setHasShownOnHighValuePage] = useState(false);
  const [userEngagement, setUserEngagement] = useState({
    scrollDepth: 0,
    timeOnPage: 0,
    formSubmissions: 0,
    hasCompletedAssessment: false,
    previouslyConvertedOnPage: false
  });
  const [activeVariation, setActiveVariation] = useState('default');
  const location = useLocation();
  
  // Check if current path is in a list of paths (supporting both exact and prefix matches)
  const isPathInList = (path, list) => {
    return list.some(item => {
      // Exact match
      if (item === path) return true;
      
      // Prefix match (if item ends with *)
      if (item.endsWith('*') && path.startsWith(item.slice(0, -1))) return true;
      
      return false;
    });
  };

  // Determine content category based on path
  const determineContentCategory = (path) => {
    for (const [category, paths] of Object.entries(EXIT_INTENT_CONFIG.categoryMapping)) {
      if (isPathInList(path, paths)) {
        return category;
      }
    }
    return 'default';
  };
  
  // Update exit intent state based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if we should disable on this path
    const shouldDisable = isPathInList(currentPath, EXIT_INTENT_CONFIG.disabledPaths);
    
    // Is this a high-value page?
    const isHighValuePage = isPathInList(currentPath, EXIT_INTENT_CONFIG.highValuePaths);
    
    // Determine content category for this path
    const contentCategory = determineContentCategory(currentPath);
    setActiveVariation(contentCategory);
    
    // Potentially modify behavior for high-value pages
    if (isHighValuePage) {
      // For example, we might want to ensure the exit intent shows on high-value pages
      // even if the user has seen it elsewhere in the session
      if (!hasShownOnHighValuePage) {
        sessionStorage.removeItem('exitIntentShown');
        setHasShownOnHighValuePage(true);
      }
    }
    
    // Reset engagement metrics when navigating to a new page
    setUserEngagement({
      scrollDepth: 0,
      timeOnPage: 0,
      formSubmissions: 0,
      hasCompletedAssessment: userEngagement.hasCompletedAssessment,
      previouslyConvertedOnPage: checkIfPreviouslyConverted(currentPath)
    });
    
    setIsEnabled(!shouldDisable);
  }, [location.pathname, hasShownOnHighValuePage]);
  
  // Check if user has previously converted on this page
  const checkIfPreviouslyConverted = (path) => {
    const convertedPages = JSON.parse(localStorage.getItem('exitIntentConversions') || '[]');
    return convertedPages.includes(path);
  };
  
  // Record a conversion
  const recordConversion = (path) => {
    const convertedPages = JSON.parse(localStorage.getItem('exitIntentConversions') || '[]');
    if (!convertedPages.includes(path)) {
      convertedPages.push(path);
      localStorage.setItem('exitIntentConversions', JSON.stringify(convertedPages));
    }
  };

  // Public methods to control exit intent
  const enableExitIntent = () => setIsEnabled(true);
  const disableExitIntent = () => setIsEnabled(false);
  
  // Update user activity data
  const setUserActivity = (activityData) => {
    setUserEngagement(prev => ({
      ...prev,
      ...activityData
    }));
  };
  
  // Record form submission
  const recordFormSubmission = (formType = 'generic') => {
    setUserEngagement(prev => ({
      ...prev,
      formSubmissions: prev.formSubmissions + 1
    }));
    
    // Record conversion if appropriate
    if (formType === 'consultation' || formType === 'assessment' || formType === 'download') {
      recordConversion(location.pathname);
      setUserEngagement(prev => ({
        ...prev,
        previouslyConvertedOnPage: true
      }));
    }
    
    // If it's an assessment completion, mark that specifically
    if (formType === 'assessment') {
      setUserEngagement(prev => ({
        ...prev,
        hasCompletedAssessment: true
      }));
    }
  };
  
  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
        setUserEngagement(prev => ({
          ...prev,
          scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
        }));
        
        // If deep scroll, maybe show whitepaper variation
        if (scrollPercent > 70 && !userEngagement.previouslyConvertedOnPage) {
          setActiveVariation('whitepaper');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userEngagement.previouslyConvertedOnPage]);
  
  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      setUserEngagement(prev => ({
        ...prev,
        timeOnPage: prev.timeOnPage + 1
      }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Decide if we should show exit intent based on user engagement
  const shouldShowExitIntent = () => {
    // Don't show if disabled
    if (!isEnabled) return false;
    
    // Don't show if they've already converted on this page
    if (userEngagement.previouslyConvertedOnPage) return false;
    
    // Don't show if they've submitted a form during this session
    if (userEngagement.formSubmissions > 0) return false;
    
    // Don't show if they've completed an assessment (they're already engaged)
    if (userEngagement.hasCompletedAssessment) return false;
    
    return true;
  };
  
  return (
    <ExitIntentContext.Provider 
      value={{ 
        enableExitIntent, 
        disableExitIntent, 
        isEnabled: shouldShowExitIntent(), 
        setUserActivity,
        recordFormSubmission,
        setActiveVariation,
        activeVariation
      }}
    >
      {children}
      <AdvancedExitIntentPopup 
        isEnabled={shouldShowExitIntent()} 
        variation={activeVariation}
        userEngagement={userEngagement}
        onConversion={(type) => recordFormSubmission(type)}
      />
    </ExitIntentContext.Provider>
  );
};

export default ExitIntentProvider;