// src/components/EnhancedConsultationModal.js
import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employeeCount: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus on the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Send the form data to your API endpoint
      const response = await fetch('/api/schedule-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to schedule consultation');
      }
      
      // Move to confirmation step
      setStep(3);
    } catch (error) {
      console.error('Error scheduling consultation:', error);
      setSubmitError(error.message || 'An error occurred while scheduling your consultation.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  // Available time slots for the scheduler
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];
  
  // Get next 5 business days
  const getBusinessDays = () => {
    const days = [];
    const date = new Date();
    
    while (days.length < 5) {
      date.setDate(date.getDate() + 1);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push(new Date(date));
      }
    }
    
    return days;
  };
  
  const businessDays = getBusinessDays();
  
  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }}
    >
      <motion.div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative"
        tabIndex={-1}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        style={{ 
          maxHeight: '85vh',
          overflowY: 'auto',
          margin: '2rem'
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-[10000]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Step 1: Contact Info */}
        {step === 1 && (
          <>
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Schedule a Consultation</h2>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-25">11-25 employees</option>
                  <option value="26-50">26-50 employees</option>
                  <option value="51-100">51-100 employees</option>
                  <option value="100+">100+ employees</option>
                </select>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Next: Select Time
                </button>
              </div>
            </form>
          </>
        )}
        
        {/* Step 2: Date/Time Selection */}
        {step === 2 && (
          <>
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Select Date & Time</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
                <div className="grid grid-cols-5 gap-2">
                  {businessDays.map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`p-2 text-center border rounded-lg ${
                        formData.date === day.toISOString().split('T')[0]
                          ? 'bg-blue-100 border-blue-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                      onClick={() => setFormData({
                        ...formData,
                        date: day.toISOString().split('T')[0]
                      })}
                    >
                      <div className="text-xs text-gray-600">
                        {day.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="font-medium">
                        {day.getDate()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time*</label>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`p-2 text-center border rounded-lg ${
                        formData.time === time
                          ? 'bg-blue-100 border-blue-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                      onClick={() => setFormData({
                        ...formData,
                        time
                      })}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know any specific topics you'd like to discuss"
                ></textarea>
              </div>
              
              {submitError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-200">
                  {submitError}
                </div>
              )}
              
              <div className="pt-4 flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.date || !formData.time || isSubmitting}
                  className={`w-2/3 font-medium py-3 rounded-lg transition-colors ${
                    !formData.date || !formData.time || isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                </button>
              </div>
            </form>
          </>
        )}
        
        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Consultation Scheduled!</h2>
            <p className="text-gray-600 mb-6">
              Your consultation is confirmed for {formData.date && new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {formData.time}.
            </p>
            <p className="text-gray-600 mb-6">
              We've sent a calendar invitation to {formData.email}. A member of our team will contact you shortly to confirm details.
            </p>
            <motion.button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ConsultationModal;