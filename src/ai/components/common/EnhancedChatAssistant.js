// src/components/common/EnhancedChatAssistant.js

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Knowledge base for service information
const knowledgeBase = {
  services: {
    research: {
      title: "Research Enhancement",
      description: "Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources to identify signals human analysts might miss.",
      capabilities: [
        "Process 100+ page documents in seconds",
        "Detect sentiment patterns across earnings calls",
        "Identify non-obvious connections between companies",
        "Synthesize insights from multiple data sources"
      ],
      benefits: [
        "40% reduction in document analysis time",
        "3.5x more companies analyzed per analyst",
        "Identify market signals 2-3 weeks ahead of market"
      ],
      faq: [
        {
          question: "How does the research enhancement AI work?",
          answer: "Our Research Enhancement AI uses natural language processing and machine learning to automatically process financial documents, earnings calls, and news. It extracts key information, identifies patterns, and surfaces insights that would take human analysts hours or days to find manually."
        },
        {
          question: "Can it integrate with our existing research systems?",
          answer: "Yes, our solution is designed to integrate seamlessly with your existing research management systems, document repositories, and data feeds. We offer standard connectors for common platforms and can develop custom integrations as needed."
        }
      ]
    },
    dueDiligence: {
      title: "Due Diligence Acceleration",
      description: "Streamline document-heavy due diligence by automatically extracting key data points from contracts, financial statements, and regulatory filings.",
      capabilities: [
        "Automate data extraction from legal documents",
        "Identify inconsistencies across deal documentation",
        "Flag potential risks and compliance issues",
        "Generate comprehensive summary reports"
      ],
      benefits: [
        "65% process acceleration",
        "2x more deals evaluated per analyst",
        "78% issue identification rate"
      ],
      faq: [
        {
          question: "How secure is the due diligence solution?",
          answer: "Security is our top priority. Our platform employs bank-level encryption, SOC 2 compliance, and secure cloud infrastructure. All data is encrypted both in transit and at rest, and we can deploy within your security perimeter if required."
        },
        {
          question: "What types of documents can it analyze?",
          answer: "Our system can process virtually any text-based document including contracts, financial statements, regulatory filings, prospectuses, offering memoranda, and more. We support PDFs (including scanned documents via OCR), Word documents, Excel spreadsheets, PowerPoint presentations, and plain text files."
        }
      ]
    },
    portfolio: {
      title: "Portfolio Analytics",
      description: "Enhance portfolio insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities.",
      capabilities: [
        "Multi-factor correlation analysis",
        "Automated performance attribution",
        "Risk exposure identification",
        "Scenario modeling with ML predictions"
      ],
      benefits: [
        "18% improvement in risk-adjusted returns",
        "90% reduction in manual data processing",
        "Identification of previously hidden correlations"
      ],
      faq: [
        {
          question: "How does your solution differ from traditional portfolio analytics tools?",
          answer: "Unlike traditional tools that rely on predefined models and relationships, our AI-powered analytics can discover non-obvious patterns and correlations in your data. It analyzes more factors simultaneously and can identify subtle relationships that conventional methods miss."
        },
        {
          question: "Can it work with our proprietary portfolio data?",
          answer: "Absolutely. Our solution is designed to integrate with your existing portfolio management systems and can ingest proprietary data, alternative data sets, and custom metrics. We configure the system to work with your specific investment approach and data environment."
        }
      ]
    },
    marketTrends: {
      title: "Market Trend Analysis",
      description: "Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data to gain market insights.",
      capabilities: [
        "Real-time sentiment analysis across news and social media",
        "Early trend detection (2-3 weeks ahead of markets)",
        "Pattern detection across disparate data sources",
        "Sector rotation prediction with confidence scoring"
      ],
      benefits: [
        "2-3 weeks earlier trend identification",
        "8x more data sources analyzed",
        "45% improved sentiment accuracy"
      ],
      faq: [
        {
          question: "What data sources do you analyze for market trends?",
          answer: "We analyze thousands of sources including financial news, earnings call transcripts, regulatory filings, social media, analyst reports, and alternative data sets like satellite imagery, shipping data, and patent filings. The platform continuously monitors these sources for emerging signals."
        },
        {
          question: "How accurate are the trend predictions?",
          answer: "Our system provides confidence scores with each prediction. Based on historical performance, high-confidence predictions (75%+) have shown 82% accuracy in identifying significant market movements 2-3 weeks before they become widely recognized."
        }
      ]
    },
    regulatory: {
      title: "Regulatory Compliance",
      description: "Stay ahead of regulatory requirements with AI that monitors rule changes, identifies compliance gaps, and automates reporting.",
      capabilities: [
        "Continuous monitoring of regulatory changes",
        "Automated gap analysis against current controls",
        "Pre-built templates for SEC, FINRA filings",
        "AI-powered document verification"
      ],
      benefits: [
        "60% compliance workload reduction",
        "99.5% requirement tracking",
        "24hr regulatory updates"
      ],
      faq: [
        {
          question: "Which regulatory frameworks do you support?",
          answer: "We support a comprehensive range of regulatory frameworks relevant to alternative investments including SEC, FINRA, CFTC, NFA, GDPR, AML/KYC, AIFMD, and FATCA/CRS. Our system is regularly updated as regulations evolve."
        },
        {
          question: "How does the system help with regulatory filings?",
          answer: "The platform provides pre-built templates for common regulatory filings, automatically extracts required data from your systems, flags potential issues, and maintains a complete audit trail. It significantly reduces manual effort while improving accuracy and timeliness."
        }
      ]
    }
  },
  
  general: {
    about: {
      companyInfo: "ITILITI.ai provides enterprise-grade AI solutions tailored specifically for alternative investment firms. We combine advanced AI capabilities with deep domain expertise to deliver measurable business outcomes.",
      differentiators: [
        "Purpose-built for alternative investment",
        "Domain-specific AI models",
        "Rapid implementation (6-12 weeks)",
        "Seamless integration with existing systems",
        "Proven ROI (typically 3-6 month payback)"
      ]
    },
    
    demo: {
      process: "Our demo process is straightforward. We'll schedule a 30-minute discovery call to understand your specific needs, followed by a personalized 60-minute demo of relevant capabilities. After the demo, we'll provide a customized ROI analysis and implementation plan.",
      nextSteps: "To schedule a demo, please provide your name, company, email, and a preferred time for our initial call. A member of our team will reach out to confirm the details."
    },
    
    pricing: {
      model: "Our pricing is based on a subscription model with three tiers: Standard, Professional, and Enterprise. Pricing depends on factors like assets under management, number of users, and specific capabilities needed.",
      starting: "Pricing starts at $5,000/month for our Standard tier, which includes one primary solution area. We're happy to provide a detailed quote based on your specific requirements."
    }
  }
};

  // Intent recognition patterns
const intentPatterns = [
  {
    intent: 'research',
    patterns: ['research', 'document analysis', 'sentiment analysis', 'research enhancement'],
    responses: (context) => generateServiceResponse('research', context)
  },
  {
    intent: 'dueDiligence',
    patterns: ['due diligence', 'document extraction', 'deal evaluation', 'contracts'],
    responses: (context) => generateServiceResponse('dueDiligence', context)
  },
  {
    intent: 'portfolio',
    patterns: ['portfolio', 'analytics', 'risk analysis', 'portfolio optimization'],
    responses: (context) => generateServiceResponse('portfolio', context)
  },
  {
    intent: 'marketTrends',
    patterns: ['market trend', 'trend analysis', 'sentiment', 'early detection'],
    responses: (context) => generateServiceResponse('marketTrends', context)
  },
  {
    intent: 'regulatory',
    patterns: ['regulatory', 'compliance', 'regulation', 'reporting'],
    responses: (context) => generateServiceResponse('regulatory', context)
  },
  {
    intent: 'ai_benefits',
    patterns: ['how can ai help', 'benefits of ai', 'advantages of ai', 'ai benefits', 'ai advantage', 'ai help'],
    responses: () => ({
      message: `AI can transform alternative investment operations in several ways:

1. **Research Enhancement** - Analyze 100x more documents in a fraction of the time
2. **Due Diligence Acceleration** - Extract key information from legal documents 65% faster
3. **Portfolio Analytics** - Discover hidden patterns and correlations for better decisions
4. **Market Trend Analysis** - Identify emerging trends 2-3 weeks ahead of markets
5. **Regulatory Compliance** - Automate monitoring of regulatory changes

Would you like to learn more about any of these specific capabilities?`,
      options: ['Research Enhancement', 'Due Diligence Acceleration', 'Portfolio Analytics', 'Market Trend Analysis', 'Regulatory Compliance']
    })
  },
  {
    intent: 'pricing',
    patterns: ['pricing', 'cost', 'subscription', 'how much', 'price'],
    responses: () => ({
      message: `Our pricing is based on a subscription model with three tiers: Standard, Professional, and Enterprise. Pricing starts at $5,000/month for our Standard tier, which includes one primary solution area. Factors like AUM, user count, and specific capabilities affect final pricing. I'd be happy to arrange a conversation with our team for a detailed quote based on your needs.`,
      options: ['Schedule a pricing discussion', 'Tell me about implementation', 'What about ROI?']
    })
  },
  {
    intent: 'demo',
    patterns: ['demo', 'demonstration', 'see it', 'show me', 'schedule'],
    responses: () => ({
      message: `I'd be happy to help you schedule a demo of our AI solutions. Our demo process includes a 30-minute discovery call followed by a personalized 60-minute demonstration of capabilities relevant to your needs. Afterwards, we'll provide a customized ROI analysis and implementation plan.`,
      form: 'demoRequest'
    })
  },
  {
    intent: 'about',
    patterns: ['about', 'company', 'who are you', 'tell me about'],
    responses: () => ({
      message: `ITILITI.ai provides enterprise-grade AI solutions tailored specifically for alternative investment firms. We combine advanced AI capabilities with deep domain expertise to deliver measurable business outcomes. Our solutions are purpose-built for alternative investment, powered by domain-specific AI models, and designed for rapid implementation (typically 6-12 weeks).`,
      options: ['Tell me about your services', 'What makes you different?', 'How do you implement?']
    })
  },
  {
    intent: 'capabilities',
    patterns: ['capabilities', 'features', 'what can', 'functions'],
    responses: () => ({
      message: `Our AI platform offers multiple capabilities tailored for alternative investment, including:
      
1. Research Enhancement - Process thousands of documents to extract insights
2. Due Diligence Acceleration - Automate document-heavy due diligence workflows
3. Portfolio Analytics - Discover hidden patterns and optimization opportunities
4. Market Trend Analysis - Identify emerging trends weeks before the market
5. Regulatory Compliance - Stay ahead of regulatory requirements

Which of these would you like to learn more about?`,
      options: ['Research Enhancement', 'Due Diligence Acceleration', 'Portfolio Analytics', 'Market Trend Analysis', 'Regulatory Compliance']
    })
  },
  {
    intent: 'implementation',
    patterns: ['implement', 'installation', 'setup', 'deploy'],
    responses: () => ({
      message: `Our implementation process typically takes 6-12 weeks and follows a structured approach:

1. Discovery & Requirements (Weeks 1-2): Initial assessment, planning, and strategy development
2. Integration & Setup (Weeks 3-4): Connect to your existing systems and data sources
3. Initial Deployment (Weeks 5-6): First capabilities go live with continuous monitoring
4. Team Onboarding (Weeks 7-8): Comprehensive training for your team
5. Optimization & Expansion (Weeks 9-12): Fine-tuning based on real-world usage

We provide dedicated implementation specialists throughout the process to ensure smooth deployment and adoption.`,
      options: ['What integrations do you support?', 'Tell me about security', "What's the ROI timeline?"]
    })
  },
  {
    intent: 'comparison',
    patterns: ['compare', 'competition', 'alternative', 'better than'],
    responses: () => ({
      message: `What makes ITILITI.ai different from generic AI solutions and competitors:

1. Purpose-built for alternative investment - Our models understand the nuances of investment workflows, documents, and data
2. Domain expertise - Our team combines AI specialists with alternative investment professionals
3. Rapid time-to-value - Implementations typically complete in 6-12 weeks with ROI in 3-6 months
4. Integration-focused - Seamless connections with your existing systems and processes
5. Specialized models - Custom-trained on investment domain knowledge and financial documents

Would you like me to elaborate on any of these differentiators?`,
      options: ['Tell me about your expertise', 'How does implementation work?', 'What ROI can I expect?']
    })
  },
  {
    intent: 'greeting',
    patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: () => ({
      message: `Hello! I'm your AI assistant for ITILITI.ai. I can help you learn about our AI solutions for alternative investment, including research enhancement, due diligence acceleration, portfolio analytics, market trend analysis, and regulatory compliance. How can I assist you today?`,
      options: ['Tell me about your services', 'How can AI help my firm?', 'Schedule a demo']
    })
  },
  {
    intent: 'thanks',
    patterns: ['thank', 'thanks', 'appreciate', 'helpful'],
    responses: () => ({
      message: `You're welcome! I'm glad I could help. Is there anything else you'd like to know about our AI solutions for alternative investment?`,
      options: ['Tell me about another service', 'Schedule a demo', "No thanks, that's all"]
    })
  },
  {
    intent: 'goodbye',
    patterns: ['goodbye', 'bye', 'see you', 'that\'s all', 'end'],
    responses: () => ({
      message: `Thank you for your interest in ITILITI.ai! If you have any more questions in the future, feel free to return to this chat. Would you like to schedule a demo or speak with our team before you go?`,
      options: ['Schedule a demo', 'No thanks, goodbye']
    })
  }
];

// Helper function to generate service-specific responses
const generateServiceResponse = (serviceKey, context = {}) => {
  const service = knowledgeBase.services[serviceKey];
  const { depth = 'overview' } = context;
  
  if (depth === 'capabilities') {
    return {
      message: `**${service.title} - Key Capabilities**\n\n${service.capabilities.map(c => `• ${c}`).join('\n')}`,
      options: ['Tell me about the benefits', 'How does it work?', 'Schedule a demo']
    };
  } else if (depth === 'benefits') {
    return {
      message: `**${service.title} - Key Benefits**\n\n${service.benefits.map(b => `• ${b}`).join('\n')}`,
      options: ['Tell me about the capabilities', 'How does it work?', 'Schedule a demo']
    };
  } else if (depth === 'faq') {
    const faqText = service.faq.map(item => `**Q: ${item.question}**\n${item.answer}`).join('\n\n');
    return {
      message: `**${service.title} - Frequently Asked Questions**\n\n${faqText}`,
      options: ['Tell me about capabilities', 'Schedule a demo']
    };
  } else {
    // Default overview
    return {
      message: `**${service.title}**\n\n${service.description}\n\nKey capabilities include ${service.capabilities.slice(0, 3).join(', ')}, and more.`,
      options: ['Tell me about the capabilities', 'What are the benefits?', 'Common questions', 'Schedule a demo']
    };
  }
};

// More sophisticated intent matching using simple NLP concepts
const findIntent = (message) => {
  const normalizedInput = message.toLowerCase().trim();
  
  // Direct matching for common canned questions
  if (normalizedInput === 'tell me about your services' || 
      normalizedInput === 'what services do you offer') {
    return {
      intent: 'capabilities',
      responses: intentPatterns.find(p => p.intent === 'capabilities').responses
    };
  }
  
  if (normalizedInput === 'how can ai help my investment firm' || 
      normalizedInput === 'how can ai help my firm') {
    return {
      intent: 'ai_benefits',
      responses: intentPatterns.find(p => p.intent === 'ai_benefits').responses
    };
  }
  
  if (normalizedInput === 'tell me about another service') {
    return {
      intent: 'capabilities',
      responses: intentPatterns.find(p => p.intent === 'capabilities').responses
    };
  }
  
  if (normalizedInput === 'i\'d like to schedule a demo' || 
      normalizedInput === 'schedule a demo' || 
      normalizedInput === 'book a demo') {
    return {
      intent: 'demo',
      responses: intentPatterns.find(p => p.intent === 'demo').responses
    };
  }
  
  // Score each intent pattern for matching
  const intentScores = intentPatterns.map(intent => {
    const matchScore = intent.patterns.reduce((score, pattern) => {
      if (normalizedInput.includes(pattern.toLowerCase())) {
        // Add score based on the pattern length (longer patterns = stronger signals)
        return score + pattern.length;
      }
      return score;
    }, 0);
    
    return { intent, score: matchScore };
  });
  
  // Find the highest scoring intent that's above zero
  const bestMatch = intentScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)[0];
  
  if (bestMatch) {
    return bestMatch.intent;
  }
  
  // Enhanced fallback - check for partial matches
  const words = normalizedInput.split(/\s+/);
  for (const word of words) {
    if (word.length > 3) { // Only consider words longer than 3 characters
      for (const intentPattern of intentPatterns) {
        for (const pattern of intentPattern.patterns) {
          if (pattern.toLowerCase().includes(word)) {
            return intentPattern;
          }
        }
      }
    }
  }
  
  // Default fallback
  return {
    intent: 'unknown',
    responses: () => ({
      message: "I'm not sure I understand your question. Would you like to know about our AI solutions for alternative investment firms, schedule a demo, or learn about implementation and pricing?",
      options: ['Tell me about your services', 'Schedule a demo', 'How does implementation work?']
    })
  };
};

// Form configurations
const formConfigs = {
  'demoRequest': {
    title: 'Schedule a Demo',
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
      { name: 'preferred_time', label: 'Preferred Time', type: 'select', required: true, 
        options: ['Morning', 'Afternoon', 'Evening'] }
    ],
    submitLabel: 'Request Demo',
    successMessage: "Thank you for your interest in a demo! We've received your information and a member of our team will reach out shortly to schedule your personalized demonstration."
  }
};

const EnhancedChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      content: 'Hello! I\'m your AI assistant for ITILITI.ai. How can I help you learn about our AI solutions for alternative investment?',
      options: [
        'Tell me about your services',
        'How can AI help my investment firm?',
        'I\'d like to schedule a demo'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({});
  const [activeForm, setActiveForm] = useState(null);
  const [conversationContext, setConversationContext] = useState({});
  const messagesEndRef = useRef(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle form field change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Process message to generate response
  const processMessage = (userMessage) => {
    // Special handling for exact matches to the suggestion buttons
    const normalizedMessage = userMessage.toLowerCase().trim();
    
    // Handle service-specific queries from the quick reply buttons
    if (normalizedMessage === 'research enhancement') {
      setConversationContext(prev => ({ ...prev, lastService: 'research' }));
      return generateServiceResponse('research', { depth: 'overview' });
    } 
    else if (normalizedMessage === 'due diligence acceleration') {
      setConversationContext(prev => ({ ...prev, lastService: 'dueDiligence' }));
      return generateServiceResponse('dueDiligence', { depth: 'overview' });
    }
    else if (normalizedMessage === 'portfolio analytics') {
      setConversationContext(prev => ({ ...prev, lastService: 'portfolio' }));
      return generateServiceResponse('portfolio', { depth: 'overview' });
    }
    else if (normalizedMessage === 'market trend analysis') {
      setConversationContext(prev => ({ ...prev, lastService: 'marketTrends' }));
      return generateServiceResponse('marketTrends', { depth: 'overview' });
    }
    else if (normalizedMessage === 'regulatory compliance') {
      setConversationContext(prev => ({ ...prev, lastService: 'regulatory' }));
      return generateServiceResponse('regulatory', { depth: 'overview' });
    }
    
    // Handle quick replies about specific aspects
    if (normalizedMessage === 'tell me about the capabilities' && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'capabilities' });
    } 
    else if (normalizedMessage === 'what are the benefits' && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'benefits' });
    }
    else if (normalizedMessage === 'common questions' && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'faq' });
    }
    
    // Regular intent matching
    const matchedIntent = findIntent(userMessage);
    
    // Check for context-specific handling
    if (userMessage.toLowerCase().includes('capabilities') && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'capabilities' });
    } else if (userMessage.toLowerCase().includes('benefits') && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'benefits' });
    } else if ((userMessage.toLowerCase().includes('question') || userMessage.toLowerCase().includes('faq')) && conversationContext.lastService) {
      return generateServiceResponse(conversationContext.lastService, { depth: 'faq' });
    }
    
    // Update context based on intent
    if (matchedIntent.intent === 'research' || 
        matchedIntent.intent === 'dueDiligence' || 
        matchedIntent.intent === 'portfolio' ||
        matchedIntent.intent === 'marketTrends' ||
        matchedIntent.intent === 'regulatory') {
      setConversationContext(prev => ({ ...prev, lastService: matchedIntent.intent }));
    }
    
    // Generate response based on intent
    return matchedIntent.responses(conversationContext);
  };
  
  // Handle bot response
  const handleBotResponse = (userMessage) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const response = processMessage(userMessage);
      
      if (response.form) {
        setActiveForm(response.form);
      }
      
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        type: 'bot', 
        content: response.message,
        options: response.options,
        form: response.form
      }]);
      
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
      content: `Submitted information for ${formConfigs[formId].title}`
    }]);
    
    // Add confirmation message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      type: 'bot', 
      content: formConfigs[formId].successMessage,
      options: ['Tell me more about your AI solutions', 'Thank you!']
    }]);
    
    // In a real implementation, you would send the form data to your API
    console.log('Form data:', formData);
    
    // Reset form data and close form
    setFormData({});
    setActiveForm(null);
  };
  
  // Render message form if present
  const renderMessageForm = (formId) => {
    if (!formId || !formConfigs[formId]) return null;
    
    // Set the active form when rendering a form
    if (activeForm !== formId) {
      setActiveForm(formId);
    }
    
    const form = formConfigs[formId];
    
    
    return (
      <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-800 mt-3">
        <h4 className="text-white font-medium mb-3">{form.title}</h4>
        <form onSubmit={(e) => handleFormSubmit(e, formId)} className="space-y-3">
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
  
  // Format message text with markdown-like syntax
  const formatMessageText = (text) => {
    // Handle bold text
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle line breaks
    formattedText = formattedText.replace(/\n/g, '<br />');
    
    // Handle bullet points
    formattedText = formattedText.replace(/• (.*?)(?:\n|$)/g, '<li>$1</li>');
    if (formattedText.includes('<li>')) {
      formattedText = formattedText.replace(/<li>(.*?)<\/li>/g, '<ul class="list-disc pl-5 my-2"><li class="mb-1">$1</li></ul>');
    }
    
    return formattedText;
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
            className="fixed bottom-8 right-8 z-50 w-full sm:w-96 h-[42rem] bg-gray-900 rounded-xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
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
                <h3 className="text-white font-medium">ITILITI AI Assistant</h3>
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
                    {message.type === 'bot' && (
                      <div className="bg-blue-600 bg-opacity-20 h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg className="h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8V4m0 4 3 3m-3-3-3 3" />
                          <circle cx="12" cy="16" r="6" />
                        </svg>
                      </div>
                    )}
                    <div className={`max-w-xs sm:max-w-md rounded-lg py-2 px-4 ${
                      message.type === 'user' 
                        ? 'bg-indigo-600 text-white ml-auto rounded-br-none'
                        : 'bg-gray-700 text-white rounded-tl-none'
                    }`}>
                      <div 
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: formatMessageText(message.content) }}
                      ></div>
                      
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
                      {message.type === 'bot' && message.form && renderMessageForm(message.form)}
                    </div>
                    {message.type === 'user' && (
                      <div className="bg-indigo-600 bg-opacity-20 h-8 w-8 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                        <svg className="h-4 w-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-blue-600 bg-opacity-20 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4m0 4 3 3m-3-3-3 3" />
                        <circle cx="12" cy="16" r="6" />
                      </svg>
                    </div>
                    <div className="bg-gray-700 text-white rounded-lg rounded-tl-none py-2 px-4">
                      <div className="typing">
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
            <div className="border-t border-gray-700 p-4 bg-gray-800">
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about our AI solutions..."
                  className="flex-grow bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-r-0 border border-gray-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-r-lg px-4 py-2 border border-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
              
              {/* Quick suggestion chips */}
              <div className="flex flex-wrap gap-2 mt-3">
                <button 
                  onClick={() => setInputValue("Tell me about your services")}
                  className="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-300 rounded-full hover:bg-opacity-50 transition-colors"
                >
                  Our services
                </button>
                <button 
                  onClick={() => setInputValue("How can AI help my investment firm?")}
                  className="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-300 rounded-full hover:bg-opacity-50 transition-colors"
                >
                  AI benefits
                </button>
                <button 
                  onClick={() => setInputValue("I'd like to schedule a demo")}
                  className="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-300 rounded-full hover:bg-opacity-50 transition-colors"
                >
                  Schedule demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom styles for typing animation */}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
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

export default EnhancedChatAssistant;