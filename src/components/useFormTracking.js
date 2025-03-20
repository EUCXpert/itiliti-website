import { useEffect } from 'react';
import { useExitIntent } from './ExitIntentProvider';

/**
 * Hook to track form submissions and update the exit intent behavior accordingly
 * @param {string} formType - The type of form (consultation, assessment, download, generic)
 * @param {boolean} submitted - Boolean indicating if the form has been submitted
 */
const useFormTracking = (formType = 'generic', submitted = false) => {
  const { recordFormSubmission } = useExitIntent();
  
  // Track when form is submitted
  useEffect(() => {
    if (submitted) {
      recordFormSubmission(formType);
    }
  }, [submitted, formType, recordFormSubmission]);
  
  return null;
};

export default useFormTracking;