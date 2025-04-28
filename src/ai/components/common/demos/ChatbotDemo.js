import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotDemo = () => {
  const [chatMessages, setChatMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your Investment AI Research Assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([
    { id: 'portfolio', text: 'Analyze my portfolio for optimization opportunities' },
    { id: 'research', text: 'Help me research a potential investment' },
    { id: 'trends', text: 'What emerging market trends should I be aware of?' },
    { id: 'risk', text: 'Assess my current risk exposure' },
    { id: 'due-diligence', text: 'Accelerate due diligence for a potential acquisition' },
    { id: 'compliance', text: 'Help with regulatory compliance requirements' }
  ]);
  const [conversationStage, setConversationStage] = useState('initial');
  const chatContainerRef = useRef(null);
  
  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  
  // Handle option selection
  const handleOptionClick = (option) => {
    // Add user message
    const userMessage = { 
      role: 'user', 
      content: option.text, 
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setCurrentOptions([]);
    setIsTyping(true);
    
    // Generate response based on the option selected
    setTimeout(() => {
      const botResponse = generateResponse(option.id, conversationStage);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: botResponse.message, 
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
      setConversationStage(botResponse.nextStage);
      setCurrentOptions(botResponse.options || []);
    }, Math.random() * 1000 + 1000); // Random typing delay between 1-2 seconds
  };
  
  // Generate responses and follow-up options based on conversation flow
  const generateResponse = (optionId, stage) => {
    // Initial conversation flow
    if (stage === 'initial') {
      switch (optionId) {
        case 'portfolio':
          return {
            message: "I've analyzed your portfolio and found several optimization opportunities:\n\n1. Your technology exposure (45%) is significantly higher than the benchmark (30%), creating concentration risk.\n\n2. Your fixed income allocation lacks inflation protection.\n\n3. ESG criteria suggest reallocating 8% from traditional energy to renewable alternatives.\n\nWould you like more details on any of these findings?",
            nextStage: 'portfolio-detail',
            options: [
              { id: 'tech-exposure', text: 'Tell me more about technology exposure risk' },
              { id: 'inflation', text: 'How can I improve inflation protection?' },
              { id: 'esg', text: 'Explain the ESG reallocation recommendation' },
              { id: 'overall', text: 'Show me an overall optimization strategy' }
            ]
          };
        case 'research':
          return {
            message: "I'd be happy to help research a potential investment. What specific sector or company are you interested in?",
            nextStage: 'research-sector',
            options: [
              { id: 'healthcare', text: 'Healthcare technology' },
              { id: 'renewable', text: 'Renewable energy' },
              { id: 'fintech', text: 'Financial technology' },
              { id: 'private', text: 'Private equity opportunities' }
            ]
          };
        case 'trends':
          return {
            message: "Based on our analysis of thousands of data sources, here are three emerging market trends our AI has identified 2-3 weeks ahead of mainstream recognition:\n\n1. Healthcare AI adoption is accelerating rapidly, with a 3.2x increase in venture funding vs. last quarter.\n\n2. Supply chain reshoring is creating investment opportunities in automation and manufacturing technology.\n\n3. Regulatory changes in financial services are opening opportunities in compliance technology.\n\nWhich trend would you like to explore further?",
            nextStage: 'trends-detail',
            options: [
              { id: 'healthcare-ai', text: 'Healthcare AI opportunities' },
              { id: 'supply-chain', text: 'Supply chain reshoring investments' },
              { id: 'fintech-reg', text: 'Financial compliance technology' },
              { id: 'other-trends', text: 'Any other significant trends?' }
            ]
          };
        case 'risk':
          return {
            message: "I've identified several previously undetected risk exposures in your current investment strategy:\n\n1. Increased correlation between your alternative and equity positions (0.78 correlation)\n\n2. Geographic concentration in Southeast Asia (32% of portfolio)\n\n3. Over-exposure to semiconductor supply chain vulnerabilities\n\n4. Limited inflation protection in your fixed income allocation\n\nWhich risk factor would you like me to address first?",
            nextStage: 'risk-detail',
            options: [
              { id: 'correlation', text: 'How can I reduce the correlation risk?' },
              { id: 'geographic', text: 'Address the geographic concentration' },
              { id: 'supply-chain', text: 'Mitigate semiconductor supply chain risk' },
              { id: 'inflation', text: 'Improve inflation protection' }
            ]
          };
        case 'due-diligence':
          return {
            message: "Our Due Diligence Acceleration AI can help streamline your acquisition process. I can analyze financial statements, contracts, and regulatory filings to extract key insights and identify potential issues. What type of due diligence are you conducting?",
            nextStage: 'due-diligence-type',
            options: [
              { id: 'financial', text: 'Financial due diligence' },
              { id: 'legal', text: 'Legal and contract analysis' },
              { id: 'market', text: 'Market opportunity assessment' },
              { id: 'regulatory', text: 'Regulatory compliance review' }
            ]
          };
        case 'compliance':
          return {
            message: "I can help with regulatory compliance requirements for alternative investments. Our AI continuously monitors regulatory changes across jurisdictions and can automate compliance tasks. Which specific area do you need assistance with?",
            nextStage: 'compliance-area',
            options: [
              { id: 'sec', text: 'SEC filing requirements' },
              { id: 'aml', text: 'AML and KYC compliance' },
              { id: 'gdpr', text: 'Data privacy (GDPR/CCPA)' },
              { id: 'reporting', text: 'Investor reporting requirements' }
            ]
          };
        default:
          return {
            message: "I'd be happy to help with that. Could you provide more details about what you're looking for?",
            nextStage: 'general',
            options: currentOptions
          };
      }
    }
    
    // Portfolio optimization follow-ups
    else if (stage === 'portfolio-detail') {
      let message = '';
      switch (optionId) {
        case 'tech-exposure':
          message = "Your technology exposure of 45% is concentrated in just a few large-cap tech companies, creating significant correlation risk. I recommend:\n\n1. Reducing overall tech exposure by 10-15%\n\n2. Diversifying within tech across different subsectors (cloud, cybersecurity, enterprise software)\n\n3. Implementing a 5% allocation to emerging tech in different geographies\n\nThis would maintain your growth orientation while reducing concentration risk by approximately 35%.";
          break;
        case 'inflation':
          message = "Your fixed income allocation lacks sufficient inflation protection. I recommend:\n\n1. Allocating 15% of your fixed income to TIPS (Treasury Inflation-Protected Securities)\n\n2. Adding a 5% position in floating rate securities\n\n3. Considering a 3-5% allocation to commodities or commodity producers\n\n4. Exploring inflation-resilient real assets like infrastructure and select REITs\n\nThese changes could improve your portfolio's inflation sensitivity score from 0.3 to 0.7.";
          break;
        case 'esg':
          message = "Based on ESG analysis, your traditional energy allocation has significant transition risk and lags sector benchmarks in emissions targets. I recommend:\n\n1. Reducing traditional energy exposure by 8%\n\n2. Reallocating 5% to renewable energy leaders\n\n3. Placing 3% in green infrastructure projects\n\nThis would improve your portfolio's ESG score from B- to A-, potentially attracting additional ESG-conscious investors and reducing long-term transition risk.";
          break;
        case 'overall':
          message = "Here's a comprehensive optimization strategy for your portfolio:\n\n1. Reduce technology exposure from 45% to 32%, diversifying across subsectors\n\n2. Add inflation protection through 7% TIPS and 3% floating rate securities\n\n3. Shift 8% from traditional to renewable energy\n\n4. Add 5% exposure to supply chain resilience opportunities\n\n5. Reallocate 4% to geographic regions currently underweighted\n\nThese changes are projected to maintain your return profile while reducing volatility by approximately 18% and improving your sustainability metrics.";
          break;
        default:
          message = "I can provide more specific recommendations for optimizing your portfolio. What particular aspect would you like to focus on?";
      }
      
      return {
        message,
        nextStage: 'follow-up',
        options: [
          { id: 'implementation', text: 'How can I implement these recommendations?' },
          { id: 'timing', text: "What's the optimal timing for these changes?" },
          { id: 'simulation', text: 'Can you simulate the impact on my returns?' },
          { id: 'new-question', text: 'I have a different question' }
        ]
      };
    }
    
    // Research follow-ups
    else if (stage === 'research-sector') {
      let message = '';
      switch (optionId) {
        case 'healthcare':
          message = "Healthcare technology is showing strong growth potential. Key insights from our analysis:\n\n1. AI diagnostic companies are seeing 87% YoY revenue growth\n\n2. Remote patient monitoring market expected to grow at 38% CAGR through 2028\n\n3. Regulatory approvals for digital therapeutics accelerating by 65% this year\n\n4. Consolidation trend emerging with 12 significant acquisitions this quarter\n\nTop investment opportunities include precision medicine platforms, AI diagnostic tools, and infrastructure providers for digital health.";
          break;
        case 'renewable':
          message = "The renewable energy sector shows strong fundamentals but varying opportunities by subsector:\n\n1. Solar costs continuing to decline (11% YoY), improving economics\n\n2. Grid-scale battery storage seeing 130% YoY capacity growth\n\n3. Green hydrogen projects attracting 3.2x more investment YoY\n\n4. Policy tailwinds strengthening across major markets\n\nHighest growth potential in energy storage, grid infrastructure, and efficiency technologies rather than pure-play generation. Component supply chain constraints present both risks and opportunities.";
          break;
        case 'fintech':
          message = "Financial technology sector analysis reveals several key trends:\n\n1. Embedded finance growing at 42% CAGR, outpacing traditional fintech\n\n2. Regulatory technology attracting 2.5x more institutional investment\n\n3. Blockchain infrastructure for financial services seeing renewed interest\n\n4. AI-powered risk assessment platforms gaining market share\n\nHighest growth segments include compliance automation, embedded finance platforms, and institutional blockchain infrastructure. Consumer-facing payment solutions showing signs of saturation.";
          break;
        case 'private':
          message = "Our private equity opportunity analysis has identified several high-potential areas:\n\n1. Lower middle-market healthcare services (5.8x EBITDA average entry multiple)\n\n2. Climate tech sector seeing 3.2x increase in early-stage funding\n\n3. Enterprise workflow automation companies with founder transitions\n\n4. Supply chain technology platforms with proven unit economics\n\nDistressed opportunities emerging in retail and commercial real estate, with select assets trading at significant discounts to replacement cost.";
          break;
        default:
          message = "I can provide detailed research on various investment sectors. Which area would you like to explore?";
      }
      
      return {
        message,
        nextStage: 'follow-up',
        options: [
          { id: 'specific-companies', text: 'Any specific companies to watch?' },
          { id: 'risks', text: 'What are the key risks in this sector?' },
          { id: 'entry-point', text: 'Optimal entry points or valuation metrics?' },
          { id: 'new-question', text: 'I have a different question' }
        ]
      };
    }
    
    // Follow-up options
    else if (stage === 'follow-up') {
      if (optionId === 'new-question') {
        return {
          message: "I'd be happy to help with a different question. What would you like to know about?",
          nextStage: 'initial',
          options: [
            { id: 'portfolio', text: 'Analyze my portfolio for optimization opportunities' },
            { id: 'research', text: 'Help me research a potential investment' },
            { id: 'trends', text: 'What emerging market trends should I be aware of?' },
            { id: 'risk', text: 'Assess my current risk exposure' },
            { id: 'due-diligence', text: 'Accelerate due diligence for a potential acquisition' },
            { id: 'compliance', text: 'Help with regulatory compliance requirements' }
          ]
        };
      }
      
      // Generic responses for other follow-up options
      let message = '';
      if (optionId === 'implementation') {
        message = "To implement these recommendations efficiently, I suggest a phased approach:\n\n1. First, address the highest concentration risks by trimming positions gradually over 2-3 weeks\n\n2. Simultaneously begin building positions in the recommended diversification areas\n\n3. Complete the transition within 30-45 days to minimize market timing risk\n\nI can generate specific execution instructions for your trading platform if you'd like.";
      } else if (optionId === 'timing') {
        message = "Based on current market conditions and your specific holdings, the optimal timing would be:\n\n1. Begin rebalancing immediately for the core position adjustments\n\n2. Phase in the commodity and inflation-protection allocations over the next 2-3 weeks\n\n3. Implement the ESG transition during the upcoming earnings season when liquidity tends to be higher\n\nThis approach balances execution quality with the urgency of addressing identified risks.";
      } else if (optionId === 'simulation') {
        message = "I've run a Monte Carlo simulation on your portfolio with the recommended changes. Results show:\n\n1. Expected return: 8.4% annually (vs. 8.7% current)\n\n2. Volatility: 12.3% (vs. 15.1% current)\n\n3. Sharpe ratio improvement: 0.68 to 0.74\n\n4. Drawdown reduction: 22% to 17% in 95th percentile stress scenario\n\n5. Improved performance in inflation scenarios by +4.2%\n\nWould you like me to generate a detailed report with these projections?";
      } else if (optionId === 'specific-companies') {
        message = "Based on our proprietary analysis, these companies show particular promise:\n\n1. HealthSignal (private): AI diagnostic platform, 142% revenue growth\n\n2. GridStore (NYSE: GRST): Leading battery technology, 40% margin expansion\n\n3. ComplianceAI (NASDAQ: CMAI): Regulatory automation, 95% client retention\n\n4. SupplyLogic (private): Supply chain optimization, 3.7x ARR growth\n\nWould you like detailed analysis reports on any of these companies?";
      } else if (optionId === 'risks') {
        message = "Key risks to monitor in this sector include:\n\n1. Regulatory uncertainty around data privacy and algorithm transparency\n\n2. Reimbursement model transitions creating short-term revenue volatility\n\n3. Large tech platform competitive entry, particularly in consumer-facing segments\n\n4. Talent acquisition challenges limiting scaling capacity\n\n5. Potential for multiple compression if interest rates exceed current projections\n\nOur sentiment analysis shows regulatory risk is currently overweighted in market pricing, potentially creating opportunity.";
      } else if (optionId === 'entry-point') {
        message = "Current optimal entry metrics for this sector:\n\n1. Public equities: Target companies trading below 5x ARR with 40%+ growth\n\n2. Private companies: Focus on post-Series B with proven unit economics but pre-expansion capital\n\n3. Current sector average EV/EBITDA of 14.8x vs. historical average of 18.2x suggests relative value\n\n4. For public equities, dollar-cost averaging over next 60 days recommended given volatility profile\n\n5. M&A valuations (5.8x EBITDA) at multi-year lows for sub-$100M enterprise value businesses";
      } else {
        message = "I can provide more specific information on this topic. What aspects are you most interested in?";
      }
      
      return {
        message,
        nextStage: 'follow-up',
        options: [
          { id: 'more-details', text: 'Can you provide more detailed analysis?' },
          { id: 'report', text: 'Generate a comprehensive report' },
          { id: 'action-steps', text: 'What specific actions should I take next?' },
          { id: 'new-question', text: 'I have a different question' }
        ]
      };
    }
    
    // Default fallback
    return {
      message: "I'd be happy to explore this topic further. What specific aspects are you interested in?",
      nextStage: 'follow-up',
      options: [
        { id: 'more-details', text: 'Can you provide more detailed analysis?' },
        { id: 'report', text: 'Generate a comprehensive report' },
        { id: 'action-steps', text: 'What specific actions should I take next?' },
        { id: 'new-question', text: 'I have a different question' }
      ]
    };
  };
  
  // Format time for messages
  const formatMessageTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-900 border-b border-gray-700 flex items-center">
        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div>
          <h3 className="text-white font-medium">Investment Research Assistant</h3>
          <div className="text-blue-200 text-xs">Powered by AI</div>
        </div>
        
        {/* Active status indicator */}
        <div className="ml-auto flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
          <span className="text-gray-300 text-sm">Live Demo</span>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="h-96 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
      >
        <div className="space-y-4">
          {chatMessages.map((message, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="bg-blue-600 bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4m0 4 3 3m-3-3-3 3" />
                    <circle cx="12" cy="16" r="6" />
                  </svg>
                </div>
              )}
              <div className={`max-w-xs sm:max-w-md rounded-lg py-3 px-4 ${
                message.role === 'user' 
                  ? 'bg-indigo-600 text-white ml-auto rounded-br-none'
                  : 'bg-gray-700 text-white rounded-tl-none'
              }`}>
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-indigo-200' : 'text-gray-400'}`}>
                  {formatMessageTime(message.timestamp)}
                </div>
              </div>
              {message.role === 'user' && (
                <div className="bg-indigo-600 bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <div className="bg-blue-600 bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center mr-2">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4m0 4 3 3m-3-3-3 3" />
                    <circle cx="12" cy="16" r="6" />
                  </svg>
                </div>
                <div className="bg-gray-700 text-white rounded-lg rounded-tl-none py-3 px-6">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Option Buttons */}
      <div className="border-t border-gray-700 p-4 bg-gray-800">
        <AnimatePresence mode="wait">
          {currentOptions.length > 0 ? (
            <motion.div
              key="options"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {currentOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full text-left p-3 bg-gradient-to-r from-blue-900 to-indigo-900 bg-opacity-50 hover:bg-opacity-70 text-blue-100 rounded-lg border border-blue-800 transition-all duration-200 hover:shadow-md hover:shadow-blue-900/30 flex items-center overflow-hidden"
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="truncate">{option.text}</span>
                  <svg 
                    className="w-4 h-4 ml-2 flex-shrink-0 transform transition-transform duration-200 group-hover:translate-x-1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-400 text-sm py-2"
            >
              Analyzing your query...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Helper text */}
      <div className="p-3 bg-gray-900 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs">
          Click on a question above to interact with the AI assistant
        </p>
      </div>
      
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
      `}</style>
    </div>
  );
};

export default ChatbotDemo;