// src/services/knowledgeService.js

/**
 * Knowledge base service for AI Chat Assistant
 * This service provides an abstraction layer for retrieving information
 * that could be switched to use an external API, database, or document repository in the future
 */

// Local knowledge base storage
const localKnowledgeBase = {
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
  
  /**
   * Service class for knowledge base operations
   * This class can be extended in the future to use an external API, database, etc.
   */
  class KnowledgeService {
    constructor() {
      this.knowledgeBase = localKnowledgeBase;
    }
  
    /**
     * Get service information
     * @param {string} serviceKey - Key for the service (research, dueDiligence, etc.)
     * @returns {object} Service information
     */
    getServiceInfo(serviceKey) {
      return this.knowledgeBase.services[serviceKey];
    }
  
    /**
     * Get general company information
     * @param {string} infoKey - Key for the information (about, demo, pricing)
     * @returns {object} Company information
     */
    getGeneralInfo(infoKey) {
      return this.knowledgeBase.general[infoKey];
    }
  
    /**
     * Get all services
     * @returns {object} All services information
     */
    getAllServices() {
      return this.knowledgeBase.services;
    }
  
    /**
     * Search knowledge base for relevant content
     * @param {string} query - Search query
     * @param {number} limit - Maximum number of results to return
     * @returns {Array} Search results
     */
    searchKnowledgeBase(query, limit = 5) {
      const normalizedQuery = query.toLowerCase();
      const results = [];
  
      // Search in services
      Object.keys(this.knowledgeBase.services).forEach(serviceKey => {
        const service = this.knowledgeBase.services[serviceKey];
        let score = 0;
        
        // Check title and description
        if (service.title.toLowerCase().includes(normalizedQuery)) {
          score += 3;
        }
        if (service.description.toLowerCase().includes(normalizedQuery)) {
          score += 2;
        }
        
        // Check capabilities and benefits
        service.capabilities.forEach(capability => {
          if (capability.toLowerCase().includes(normalizedQuery)) {
            score += 1;
          }
        });
        
        service.benefits.forEach(benefit => {
          if (benefit.toLowerCase().includes(normalizedQuery)) {
            score += 1;
          }
        });
        
        // Check FAQs
        service.faq.forEach(faq => {
          if (faq.question.toLowerCase().includes(normalizedQuery)) {
            score += 2;
          }
          if (faq.answer.toLowerCase().includes(normalizedQuery)) {
            score += 1;
          }
        });
        
        if (score > 0) {
          results.push({
            type: 'service',
            key: serviceKey,
            title: service.title,
            score
          });
        }
      });
      
      // Search in general info
      Object.keys(this.knowledgeBase.general).forEach(infoKey => {
        const info = this.knowledgeBase.general[infoKey];
        let score = 0;
        
        // Check company info
        if (infoKey === 'about' && info.companyInfo.toLowerCase().includes(normalizedQuery)) {
          score += 2;
        }
        
        // Check differentiators
        if (infoKey === 'about') {
          info.differentiators.forEach(diff => {
            if (diff.toLowerCase().includes(normalizedQuery)) {
              score += 1;
            }
          });
        }
        
        // Check demo and pricing info
        if (infoKey === 'demo' && 
            (info.process.toLowerCase().includes(normalizedQuery) || 
             info.nextSteps.toLowerCase().includes(normalizedQuery))) {
          score += 2;
        }
        
        if (infoKey === 'pricing' && 
            (info.model.toLowerCase().includes(normalizedQuery) || 
             info.starting.toLowerCase().includes(normalizedQuery))) {
          score += 2;
        }
        
        if (score > 0) {
          results.push({
            type: 'general',
            key: infoKey,
            title: infoKey.charAt(0).toUpperCase() + infoKey.slice(1),
            score
          });
        }
      });
      
      // Sort by score and limit results
      return results
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    }
  
    /**
     * This method could be extended to integrate with external document repositories
     * like ElasticSearch, Pinecone, or a vector database for more sophisticated retrieval
     * @param {string} query - Search query
     * @returns {Promise<Array>} Search results
     */
    async searchDocuments(query) {
      // This is a placeholder for future implementation
      // In a real implementation, this would query an external service
  
      // Simulate async behavior
      return new Promise(resolve => {
        setTimeout(() => {
          // For now, just use the regular search
          resolve(this.searchKnowledgeBase(query, 3));
        }, 300);
      });
    }
  }
  
  export default KnowledgeService();