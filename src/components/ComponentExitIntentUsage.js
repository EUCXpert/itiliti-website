import React, { useEffect } from 'react';
import { useExitIntent } from './ExitIntentProvider';

// Example component showing how to control exit intent behavior
const ServicePageWithExitIntentControl = ({ serviceName, serviceDescription }) => {
  const { enableExitIntent, disableExitIntent } = useExitIntent();
  
  // If this page has a long form, you might want to disable
  // exit intent while the user is filling out the form
  const handleFormFocus = () => {
    // Disable exit intent while user is engaged with the form
    disableExitIntent();
  };
  
  const handleFormBlur = () => {
    // Re-enable exit intent when user is no longer focused on the form
    enableExitIntent();
  };
  
  // You could also conditionally enable/disable based on scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      // Only show exit intent if user has engaged with at least 25% of page
      if (scrollPercent > 25) {
        enableExitIntent();
      } else {
        disableExitIntent();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableExitIntent, disableExitIntent]);
  
  return (
    <div>
      <h1>{serviceName}</h1>
      <p>{serviceDescription}</p>
      
      {/* Form that disables exit intent while focused */}
      <form>
        <input 
          type="text" 
          placeholder="Your name" 
          onFocus={handleFormFocus}
          onBlur={handleFormBlur}
        />
        <textarea 
          placeholder="Your message"
          onFocus={handleFormFocus}
          onBlur={handleFormBlur}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServicePageWithExitIntentControl;