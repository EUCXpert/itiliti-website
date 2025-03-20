import React, { useEffect } from 'react';
import { useExitIntent } from './ExitIntentProvider';

/**
 * Component to track user engagement on a page
 * Use this at the top level of your page components
 */
const PageEngagementTracker = ({ 
  pageName,
  pageCategory = null, // optional override for page category
}) => {
  const { setUserActivity, setActiveVariation } = useExitIntent();
  
  // Set up scroll tracking
  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
        setUserActivity({ scrollDepth: scrollPercent });
      }
    };
    
    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, [setUserActivity]);
  
  // Set up time tracking
  useEffect(() => {
    const startTime = Date.now();
    const timeInterval = setInterval(() => {
      const secondsOnPage = Math.floor((Date.now() - startTime) / 1000);
      setUserActivity({ timeOnPage: secondsOnPage });
    }, 1000);
    
    // Track page visit in analytics
    if (window.gtag) {
      window.gtag('event', 'page_engagement', {
        'event_category': 'engagement',
        'event_label': pageName,
        'page_category': pageCategory
      });
    }
    
    // Override category if provided
    if (pageCategory) {
      setActiveVariation(pageCategory);
    }
    
    return () => clearInterval(timeInterval);
  }, [pageName, pageCategory, setUserActivity, setActiveVariation]);
  
  // Track user interactions
  useEffect(() => {
    const trackInteraction = () => {
      setUserActivity({ hasInteracted: true });
    };
    
    document.addEventListener('click', trackInteraction);
    document.addEventListener('keydown', trackInteraction);
    
    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
    };
  }, [setUserActivity]);
  
  return null; // This is a tracking component, no UI
};

/**
 * Higher-order component to add engagement tracking to any page
 */
const withPageEngagement = (WrappedComponent, pageName, pageCategory = null) => {
  return function WithPageEngagement(props) {
    return (
      <>
        <PageEngagementTracker pageName={pageName} pageCategory={pageCategory} />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export { PageEngagementTracker, withPageEngagement };