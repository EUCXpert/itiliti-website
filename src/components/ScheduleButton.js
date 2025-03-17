import React, { useState } from 'react';
import ConsultationModal from './ConsultationModal';

const ScheduleButton = ({ 
  className = "", 
  text = "Schedule a Consultation", 
  variant = "primary"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determine button styles based on variant
  let buttonStyles = '';
  
  switch(variant) {
    case 'primary':
      buttonStyles = 'bg-blue-950 hover:bg-blue-700 text-white';
      break;
    case 'secondary':
      buttonStyles = 'bg-white text-blue-900 hover:bg-blue-50';
      break;
    case 'outline':
      buttonStyles = 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10';
      break;
    default:
      buttonStyles = 'bg-blue-600 hover:bg-blue-900 text-white';
  }

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`${buttonStyles} px-6 py-3 rounded-lg font-medium transition-colors ${className}`}
      >
        {text}
      </button>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ScheduleButton;