import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      content: 'Hello! I\'m your AI assistant. How can I help you with your alternative investment technology needs today?',
      options: [
        'Tell me about your AI solutions',
        'How do you enhance investment research?',
        'What partners do you work with?',
        'I\'d like to schedule a demo'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({});
  const messagesEndRef = useRef(null);
  
  // Auto responses based on certain keywords
  const responses = {
    'research': {
      content: 'Our Investment Research Enhancement AI transforms productivity by processing thousands of documents, earnings calls, and data sources to identify signals human analysts might miss. It can summarize 100+ page documents in seconds, detect sentiment patterns, and identify non-obvious connections between companies.',
      options: ['Tell me more about due diligence AI', 'How does this compare to manual research?', 'What partners power this solution?']
    },
    'due diligence': {
      content: 'Our Due Diligence Acceleration AI streamlines document-heavy processes by automatically extracting key data points from contracts, financial statements, and regulatory filings. It can extract key terms from legal documents, flag inconsistencies across documentation, and create comprehensive risk assessment reports.',
      options: ['How much time can this save?', 'Tell me about your portfolio analytics', 'Schedule a demo']
    },
    'portfolio': {
      content: 'Our Portfolio Analytics AI enhances insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities. It performs multi-factor correlation analysis, automated performance attribution, and scenario modeling with ML predictions.',
      options: ['How does this integrate with our systems?', 'Tell me about your market trend analysis', 'What partners power this solution?']
    },
    'partners': {
      content: 'We partner with industry-leading AI technology providers including Microsoft, BlueFlame.ai, ApexHQ.ai, Direktiv.io, and archTIS to deliver cutting-edge solutions tailored for alternative investment firms.',
      options: ['Tell me about Microsoft integration', 'How do you work with BlueFlame.ai?', 'Tell me about your AI solutions']
    },
    'demo': {
      content: 'I\'d be happy to help you schedule a personalized demo. Our team can showcase how our AI solutions can address your specific challenges and deliver measurable business outcomes.',
      options: ['Schedule now', 'Send me more information first', 'Tell me about your services']
    },
    'schedule': {
      content: 'Great! I can help you schedule a demo with our team. When would be a good time for you?',
      form: 'schedule'
    }
  };
  
  // Form configurations
  const forms = {
    'schedule': {
      title: 'Schedule a Demo',
      fields: [
        { name: 'name', label: 'Your Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'company', label: 'Company', type: 'text', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'preferred_time', label: 'Preferred Time', type: 'select', required: true, 
          options: ['Morning', 'Afternoon', 'Evening'] }
      ],
      submitLabel: 'Request Demo'
    }
  };
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle form field change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle bot response
  const handleBotResponse = (userMessage) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      let responseFound = false;
      
      // Check against keywords
      for (const [keyword, response] of Object.entries(responses)) {
        if (userMessage.toLowerCase().includes(keyword.toLowerCase())) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            type: 'bot', 
            content: response.content,
            options: response.options,
            form: response.form
          }]);
          responseFound = true;
          break;
        }
      }
      
      // Default response if no keyword match
      if (!responseFound) {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          type: 'bot', 
          content: 'Thank you for your message. How else can I help you with your AI and investment technology needs?',
          options: ['Tell me about your AI solutions', 'What partners do you work with?', 'I\'d like to schedule a demo']
        }]);
      }
      
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay to seem more natural
  };
  
  // Handle input submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'user', 
      content: inputValue
    }]);
    
    // Generate response
    handleBotResponse(inputValue);
    
    // Clear input
    setInputValue('');
  };
  
  // Handle quick reply option click
  const handleOptionClick = (option) => {
    // Add user message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'user', 
      content: option
    }]);
    
    // Generate response
    handleBotResponse(option);
  };
  
  // Handle form submission
  const handleFormSubmit = (e, formId) => {
    e.preventDefault();
    
    // Add form submission message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'user', 
      content: `Submitted ${formId} information`
    }]);
    
    // Add confirmation message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'bot', 
      content: 'Thank you for your information! Our team will reach out to you shortly to confirm your demo appointment.',
      options: ['Tell me more about your AI solutions', 'Thank you!']
    }]);
    
    // In a real implementation, you would send the form data to your API
    console.log('Form data:', formData);
    
    // Reset form data
    setFormData({});
  };
  
  // Render message form if present
  const renderMessageForm = (message) => {
    if (!message.form || !forms[message.form]) return null;
    
    const form = forms[message.form];
    
    return (
      <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-800 mt-3">
        <h4 className="text-white font-medium mb-3">{form.title}</h4>
        <form onSubmit={(e) => handleFormSubmit(e, message.form)} className="space-y-3">
          {form.fields.map((field) => (
            <div key={field.name} className="space-y-1">
              <label className="text-blue-200 text-sm">{field.label}{field.required && '*'}</label>
              {field.type === 'select' ? (
                <select 
                  name={field.name}
                  required={field.required}
                  onChange={handleFormChange}
                  value={formData[field.name] || ''}
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-blue-700 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Select an option</option>
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input 
                  type={field.type} 
                  name={field.name}
                  required={field.required}
                  onChange={handleFormChange}
                  value={formData[field.name] || ''}
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-blue-700 rounded-md px-3 py-2 text-sm"
                />
              )}
            </div>
          ))}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium mt-2"
          >
            {form.submitLabel}
          </button>
        </form>
      </div>
    );
  };
  
  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-glow-lg text-white focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        
        {/* Pulsing effect */}
        <span className="absolute w-full h-full rounded-full animate-ping bg-blue-600 opacity-40"></span>
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 w-full sm:w-96 h-96 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                  <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-white font-medium">AI Assistant</h3>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white opacity-70 hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900 to-gray-800">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-3/4 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-lg rounded-tr-none py-2 px-4 ml-auto'
                        : 'bg-gray-800 text-white rounded-lg rounded-tl-none py-2 px-4'
                    }`}>
                      <div>{message.content}</div>
                      
                      {/* Quick reply options */}
                      {message.type === 'bot' && message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              className="block w-full text-left text-sm bg-blue-900 bg-opacity-30 hover:bg-opacity-50 text-blue-200 px-3 py-1.5 rounded border border-blue-800 transition-colors"
                              onClick={() => handleOptionClick(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      {/* Form if present */}
                      {message.type === 'bot' && message.form && renderMessageForm(message)}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 text-white rounded-lg rounded-tl-none py-2 px-4">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-gray-800 border-t border-gray-700 flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom styles for typing animation */}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .typing-indicator span {
          height: 8px;
          width: 8px;
          background: #3b82f6;
          border-radius: 50%;
          display: block;
          margin-right: 5px;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
          margin-right: 0;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
        
        .shadow-glow-lg {
          box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </>
  );
};

export default AIChatAssistant;