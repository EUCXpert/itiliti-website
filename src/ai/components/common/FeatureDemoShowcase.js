import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotDemo from './demos/ChatbotDemo';
import DocumentAnalysisDemo from './demos/DocumentAnalysisDemo';
import MarketTrendDemo from './demos/MarketTrendDemo';

const FeatureDemoShowcase = () => {
  const [activeDemo, setActiveDemo] = useState('chatbot');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Animation controls
  const animateSection = (section) => {
    setIsAnimating(true);
    setActiveDemo(section);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">in Action</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Experience how our AI transforms investment workflows with real-time insights and analysis.
          </p>
        </div>
        
        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center ${
              activeDemo === 'chatbot'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-gray-800 bg-opacity-60 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
            }`}
            onClick={() => animateSection('chatbot')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            AI Research Assistant
          </button>
          
          <button
            className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center ${
              activeDemo === 'document'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'bg-gray-800 bg-opacity-60 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
            }`}
            onClick={() => animateSection('document')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Document Analysis
          </button>
          
          <button
            className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center ${
              activeDemo === 'market'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-gray-800 bg-opacity-60 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
            }`}
            onClick={() => animateSection('market')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Market Trend Analysis
          </button>
        </div>
        
        {/* Demo Windows */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeDemo === 'chatbot' && (
              <motion.div
                key="chatbot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ChatbotDemo />
              </motion.div>
            )}
            
            {activeDemo === 'document' && (
              <motion.div
                key="document"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <DocumentAnalysisDemo />
              </motion.div>
            )}
            
            {activeDemo === 'market' && (
              <motion.div
                key="market"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <MarketTrendDemo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
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
        
        .typing span {
          height: 8px;
          width: 8px;
          background: #3b82f6;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .typing span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing span:nth-child(3) {
          animation-delay: 0.4s;
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

export default FeatureDemoShowcase;