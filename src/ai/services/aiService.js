// src/services/aiService.js

import knowledgeService from './knowledgeService';

/**
 * AI Service for integrating with external AI APIs
 * This is a placeholder implementation that can be expanded when you decide
 * to integrate with an external AI service like OpenAI, Anthropic, etc.
 */
class AIService {
  constructor() {
    this.apiKey = process.env.REACT_APP_AI_API_KEY || '';
    this.apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT || '';
    this.isConfigured = !!(this.apiKey && this.apiEndpoint);
  }

  /**
   * Check if the AI service is properly configured
   * @returns {boolean} True if the service is configured
   */
  isServiceConfigured() {
    return this.isConfigured;
  }

  /**
   * Generate a response using an external AI API
   * This would be implemented when you choose an AI provider
   * 
   * @param {string} userMessage - The message from the user
   * @param {Array} conversationHistory - Previous messages for context
   * @returns {Promise<object>} Response object with message text and options
   */
  async generateAIResponse(userMessage, conversationHistory) {
    if (!this.isConfigured) {
      console.warn('AI service is not configured. Falling back to local response.');
      return this.generateLocalResponse(userMessage, conversationHistory);
    }

    try {
      // This would be replaced with actual API call to OpenAI, Anthropic, etc.
      // Example for OpenAI:
      /*
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            ...conversationHistory.map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        return {
          message: data.choices[0].message.content,
          // You would need to parse options/forms from the AI response
          // or have a standardized format the AI follows
        };
      }
      */

      // For now, fall back to local response
      console.log('AI API call would happen here. Using local response instead.');
      return this.generateLocalResponse(userMessage, conversationHistory);
    } catch (error) {
      console.error('Error calling AI API:', error);
      return this.generateLocalResponse(userMessage, conversationHistory);
    }
  }
  
  /**
   * Extract relevant context from conversation history
   * @param {Array} conversationHistory - Previous messages
   * @returns {object} Context information
   */
  extractContext(conversationHistory) {
    const context = {
      lastService: null
    };
    
    // Analyze the last few messages to extract context
    const recentMessages = conversationHistory.slice(-5);
    
    for (const message of recentMessages) {
      const content = message.content.toLowerCase();
      
      // Check for service mentions
      if (content.includes('research enhancement') || content.includes('document analysis')) {
        context.lastService = 'research';
      } else if (content.includes('due diligence')) {
        context.lastService = 'dueDiligence';
      } else if (content.includes('portfolio analytics')) {
        context.lastService = 'portfolio';
      } else if (content.includes('market trend')) {
        context.lastService = 'marketTrends';
      } else if (content.includes('regulatory compliance')) {
        context.lastService = 'regulatory';
      }
    }
    
    return context;
  }

  /**
   * Generates a chat response from a local knowledge base
   * This method mimics what an external AI service would do but uses
   * pattern matching instead of a real AI
   * 
   * @param {string} userMessage - The message from the user
   * @param {Array} conversationHistory - Previous messages for context
   * @returns {Promise<object>} Response object with message text and options
   */
  async generateResponse(userMessage, conversationHistory) {
    // When you're ready to use an external AI service, you can switch this:
    // return this.generateAIResponse(userMessage, conversationHistory);
    
    // For now, use the local implementation:
    return this.generateLocalResponse(userMessage, conversationHistory);
  }
  
  /**
   * Generate service-specific response based on knowledge base
   * @param {string} serviceKey - Service identifier
   * @param {object} context - Context information
   * @returns {object} Response with message and options
   */
  generateServiceResponse(serviceKey, context = {}) {
    const service = knowledgeService.getServiceInfo(serviceKey);
    const { depth = 'overview' } = context;
    
    if (!service) {
      return {
        message: "I'm sorry, I couldn't find information about that service. Would you like to know about our other AI solutions?",
        options: ['Research Enhancement', 'Due Diligence Acceleration', 'Portfolio Analytics', 'Market Trend Analysis', 'Regulatory Compliance']
      };
    }
    
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
  }
  
  async generateLocalResponse(userMessage, conversationHistory) {
    // Intent patterns for matching user input
    const intentPatterns = [
      {
        intent: 'research',
        patterns: ['research', 'document analysis', 'sentiment analysis', 'research enhancement'],
        handler: (context) => this.generateServiceResponse('research', context)
      },
      {
        intent: 'dueDiligence',
        patterns: ['due diligence', 'document extraction', 'deal evaluation', 'contracts'],
        handler: (context) => this.generateServiceResponse('dueDiligence', context)
      },
      {
        intent: 'portfolio',
        patterns: ['portfolio', 'analytics', 'risk analysis', 'portfolio optimization'],
        handler: (context) => this.generateServiceResponse('portfolio', context)
      },
      {
        intent: 'marketTrends',
        patterns: ['market trend', 'trend analysis', 'sentiment', 'early detection'],
        handler: (context) => this.generateServiceResponse('marketTrends', context)
      },
      {
        intent: 'regulatory',
        patterns: ['regulatory', 'compliance', 'regulation', 'reporting'],
        handler: (context) => this.generateServiceResponse('regulatory', context)
      },
      {
        intent: 'pricing',
        patterns: ['pricing', 'cost', 'subscription', 'how much', 'price'],
        handler: () => {
          const pricingInfo = knowledgeService.getGeneralInfo('pricing');
          return {
            message: `${pricingInfo.model} ${pricingInfo.starting} I'd be happy to arrange a conversation with our team for a detailed quote based on your needs.`,
            options: ['Schedule a pricing discussion', 'Tell me about implementation', 'What about ROI?']
          };
        }
      },
      {
        intent: 'demo',
        patterns: ['demo', 'demonstration', 'see it', 'show me', 'schedule'],
        handler: () => {
          const demoInfo = knowledgeService.getGeneralInfo('demo');
          return {
            message: `I'd be happy to help you schedule a demo of our AI solutions. ${demoInfo.process}`,
            form: 'demoRequest'
          };
        }
      },
      {
        intent: 'about',
        patterns: ['about', 'company', 'who are you', 'tell me about'],
        handler: () => {
          const aboutInfo = knowledgeService.getGeneralInfo('about');
          return {
            message: `${aboutInfo.companyInfo}`,
            options: ['Tell me about your services', 'What makes you different?', 'How do you implement?']
          };
        }
      },
      {
        intent: 'greeting',
        patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
        handler: () => ({
          message: `Hello! I'm your AI assistant for ITILITI.ai. I can help you learn about our AI solutions for alternative investment, including research enhancement, due diligence acceleration, portfolio analytics, market trend analysis, and regulatory compliance. How can I assist you today?`,
          options: ['Tell me about your services', 'How can AI help my firm?', 'Schedule a demo']
        })
      },
      {
        intent: 'thanks',
        patterns: ['thank', 'thanks', 'appreciate', 'helpful'],
        handler: () => ({
          message: `You're welcome! I'm glad I could help. Is there anything else you'd like to know about our AI solutions for alternative investment?`,
          options: ['Tell me about another service', 'Schedule a demo', "No thanks, that's all"]
        })
      }
    ];

    // Extract context from conversation history
    const context = this.extractContext(conversationHistory);

    // Check for context-specific handling
    if (userMessage.toLowerCase().includes('capabilities') && context.lastService) {
      return this.generateServiceResponse(context.lastService, { depth: 'capabilities' });
    } 
    else if (userMessage.toLowerCase().includes('benefits') && context.lastService) {
      return this.generateServiceResponse(context.lastService, { depth: 'benefits' });
    }
    else if ((userMessage.toLowerCase().includes('question') || userMessage.toLowerCase().includes('faq')) && context.lastService) {
      return this.generateServiceResponse(context.lastService, { depth: 'faq' });
    }

    // Match intent based on patterns
    const normalizedInput = userMessage.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    intentPatterns.forEach(intentPattern => {
      const score = intentPattern.patterns.reduce((acc, pattern) => {
        if (normalizedInput.includes(pattern.toLowerCase())) {
          return acc + pattern.length;
        }
        return acc;
      }, 0);

      if (score > highestScore) {
        highestScore = score;
        bestMatch = intentPattern;
      }
    });

    if (bestMatch && highestScore > 0) {
      // Update context based on matched intent
      if (['research', 'dueDiligence', 'portfolio', 'marketTrends', 'regulatory'].includes(bestMatch.intent)) {
        context.lastService = bestMatch.intent;
      }
      
      return bestMatch.handler(context);
    }

    // If no intent matched, try to search the knowledge base
    const searchResults = await knowledgeService.searchKnowledgeBase(userMessage, 1);
    
    if (searchResults.length > 0) {
      const topResult = searchResults[0];
      
      if (topResult.type === 'service') {
        context.lastService = topResult.key;
        return this.generateServiceResponse(topResult.key, { depth: 'overview' });
      }
      else if (topResult.type === 'general') {
        const info = knowledgeService.getGeneralInfo(topResult.key);
        
        if (topResult.key === 'about') {
          return {
            message: info.companyInfo,
            options: ['Tell me about your services', 'What makes you different?', 'How do you implement?']
          };
        }
        else if (topResult.key === 'demo') {
          return {
            message: `I'd be happy to help you schedule a demo. ${info.process}`,
            form: 'demoRequest'
          };
        }
        else if (topResult.key === 'pricing') {
          return {
            message: `${info.model} ${info.starting}`,
            options: ['Schedule a pricing discussion', 'Tell me about implementation', 'What about ROI?']
          };
        }
      }
    }
    
    // Default fallback response
        return {
          message: "I'm not sure I understand your question. Would you like to know about our AI solutions for alternative investment firms, schedule a demo, or learn about implementation and pricing?",
          options: ['Tell me about your services', 'Schedule a demo', 'How does implementation work?']
        };
      }
    }

    export default AIService;