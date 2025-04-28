import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../components/common/AIFooter';
import AIChatAssistant from '../components/common/AIChatAssistant';

const PartnersPage = () => {
  const [activePartner, setActivePartner] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    partnerInterest: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Partner data
  const partners = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logoUrl: '/Microsoft.png',
      accentColor: '#00a4ef',
      slogan: 'Enterprise AI solutions powered by Azure OpenAI and Microsoft Copilot',
      description: 'Our partnership with Microsoft enables us to leverage cutting-edge AI technologies while maintaining the highest standards of security and compliance. Through Azure OpenAI Services and Microsoft Copilot, we deliver enterprise-grade AI capabilities that transform how alternative investment firms analyze data, discover insights, and make decisions.',
      benefits: [
        'Azure OpenAI Services for customizable AI models',
        'Microsoft Copilot for enhanced productivity',
        'Azure Machine Learning for proprietary model development',
        'Enterprise-grade security and compliance'
      ],
      useCases: [
        {
          title: 'Research Enhancement',
          description: 'Leverage Azure OpenAI to extract key insights from research reports, earnings calls, and market data.'
        },
        {
          title: 'Document Intelligence',
          description: 'Process contracts, financial statements, and regulatory filings with advanced Azure Document Intelligence.'
        },
        {
          title: 'Investment Workflow Automation',
          description: 'Streamline routine tasks and decision processes with Microsoft Power Automate and Copilot integration.'
        }
      ]
    },
    {
      id: 'blueflame',
      name: 'BlueFlame.ai',
      logoUrl: '/BlueFlame.png',
      accentColor: '#3b82f6',
      slogan: 'Advanced Natural Language Processing for investment document analysis',
      description: 'Our partnership with BlueFlame.ai brings specialized AI-powered knowledge management and productivity capabilities to alternative investment managers. Their platform enables unified search across internal files, third-party systems, and public external sources, complementing our solutions with robust document intelligence.',
      benefits: [
        'Search across PDFs & unstructured content',
        'Aggregate document reviews for comprehensive insights',
        'LLM-agnostic platform with model selection flexibility',
        'Integrations with all major CRM, collaboration, and data systems'
      ],
      useCases: [
        {
          title: 'Investment Research & Trading',
          description: 'Speed up the review of earnings transcripts, research reports, and SEC filings with intelligent extraction and aggregation.'
        },
        {
          title: 'Deep Research',
          description: 'Receive comprehensive investment insights in minutes rather than hours with advanced research capabilities that can be exported in multiple formats.'
        },
        {
          title: 'Investor Relations',
          description: 'Scale IR operations efficiently with automated preparation and communication tools without adding more staff.'
        }
      ]
    },
    {
      id: 'apexhq',
      name: 'ApexHQ.ai',
      logoUrl: '/Apex.svg',
      accentColor: '#8b5cf6',
      slogan: 'AI-driven investment research and market intelligence platform',
      description: 'Our partnership with ApexHQ.ai provides advanced security for generative AI usage within investment firms. Their platform enables secure and governed AI adoption, eliminating risks while allowing your team to leverage the power of AI for investment research and decision making.',
      benefits: [
        'Secure ChatGPT Enterprise usage with visibility',
        'Code Assistants Security for all IDEs',
        'Microsoft 365 Copilot Security integration',
        'AI Gateway to centralize and manage all GenAI access'
      ],
      useCases: [
        {
          title: 'Shadow AI Governance',
          description: 'Discover and govern GenAI usage across your organization, controlling user access and eliminating security risks.'
        },
        {
          title: 'Secure AI Portal',
          description: 'Interact with any LLM through a unified portal with embedded security and boosted productivity capabilities.'
        },
        {
          title: 'Custom AI Application Protection',
          description: 'Protect apps you build with AI Firewall for fast protection without performance trade-offs.'
        }
      ]
    },
    {
      id: 'direktiv',
      name: 'Direktiv.io',
      logoUrl: '/Direktiv.svg',
      accentColor: '#ec4899',
      slogan: 'Workflow automation with embedded AI for investment processes',
      description: 'Our partnership with Direktiv.io enables us to build sophisticated workflow automation for investment processes. Their cloud-agnostic, serverless flow engine capitalizes on microservices, containers, and custom code to create efficient processes that integrate with all your existing systems.',
      benefits: [
        'Seamless integration with existing systems',
        'Orchestration of APIs to create higher-level services',
        'Error handling, retries, logging and tracing capabilities',
        'Event-driven system with container approach'
      ],
      useCases: [
        {
          title: 'Investment Workflow Automation',
          description: 'Streamline repetitive duties within your investment team by moving scripts and playbooks into an easily accessible platform.'
        },
        {
          title: 'System Integration',
          description: 'Connect different systems with Direktiv\'s event-driven system acting as a broker for multiple backends.'
        },
        {
          title: 'API Orchestration',
          description: 'Create higher-level services through a YAML-based flow description system that makes it easy to customize workflows.'
        }
      ]
    },
    {
      id: 'archtis',
      name: 'archTIS',
      logoUrl: '/archTIS.svg',
      accentColor: '#10b981',
      slogan: 'AI-enhanced security and compliance for sensitive investment data',
      description: 'Our partnership with archTIS brings dynamic data-centric protection for your most sensitive investment data. Their NC Protect solution delivers attribute-based access control and data protection that adjusts with your users\' context to protect against accidental and malicious data loss.',
      benefits: [
        'Dynamic attribute-based access control (ABAC)',
        'Real-time compliance risk assessment',
        'Fine-grained attribute-based policies',
        'Seamless integration with Microsoft 365 and other platforms'
      ],
      useCases: [
        {
          title: 'Sensitive Data Protection',
          description: 'Ensure sensitive investment data is only accessible to authorized personnel based on real-time context evaluation.'
        },
        {
          title: 'Compliance Enforcement',
          description: 'Automatically enforce zero trust principles at the data layer across all your investment documents and communications.'
        },
        {
          title: 'Data Loss Prevention',
          description: 'Protect against accidental and malicious data loss through dynamic security that adjusts based on user context and file content.'
        }
      ]
    }
  ];

  const partnerCategories = [
    { id: 'all', name: 'All Partners' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'security', name: 'Security & Compliance' },
    { id: 'data', name: 'Data & Analytics' },
    { id: 'workflow', name: 'Workflow & Automation' }
  ];

  // State for partner filtering
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter partners based on category
  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => {
        if (activeCategory === 'ai' && (partner.id === 'microsoft' || partner.id === 'blueflame')) return true;
        if (activeCategory === 'security' && (partner.id === 'apexhq' || partner.id === 'archtis')) return true;
        if (activeCategory === 'data' && (partner.id === 'blueflame' || partner.id === 'microsoft')) return true;
        if (activeCategory === 'workflow' && (partner.id === 'direktiv')) return true;
        return false;
      });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    // In a real implementation, you would send the form data to your backend
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContactForm(false);
      setContactForm({
        name: '',
        email: '',
        company: '',
        message: '',
        partnerInterest: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Strategic <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Partnerships</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We partner with industry-leading technology providers to deliver comprehensive AI solutions tailored specifically for alternative investment firms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                onClick={() => setShowContactForm(true)}
              >
                Explore Partnership Opportunities
              </button>
              <button 
                className="px-8 py-4 bg-transparent border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors"
                onClick={() => {
                  const solutionsSection = document.getElementById('partner-solutions');
                  solutionsSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Partners
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Partner Value Proposition */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Power of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Strategic Partnerships</span>
            </h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              Our partnerships extend beyond typical vendor relationships. We collaborate deeply with our technology partners to create integrated solutions that address the specific challenges of alternative investment firms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mb-4 border border-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Expertise</h3>
              <p className="text-gray-300">
                Access to industry-leading technologies and specialized expertise from around the world, curated specifically for alternative investment applications.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mb-4 border border-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integrated Solutions</h3>
              <p className="text-gray-300">
                Seamlessly integrated technologies that work together to deliver comprehensive solutions rather than siloed point products.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mb-4 border border-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Continuous Innovation</h3>
              <p className="text-gray-300">
                Ongoing collaboration and co-development ensures our solutions evolve with the rapidly changing technology landscape and investment industry needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partner Solutions */}
      <div id="partner-solutions" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Solutions</span>
            </h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              Explore our strategic partnerships and discover how these integrations enhance our AI solutions for alternative investment.
            </p>
          </div>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {partnerCategories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-glow'
                  : 'bg-gray-800 bg-opacity-60 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map(partner => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group"
                onClick={() => setActivePartner(partner)}
              >
                <div className="h-12 mb-4 flex items-center">
                  <img src={partner.logoUrl} alt={partner.name} className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-blue-200 font-light mb-4">
                  {partner.slogan}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: partner.accentColor }}
                    ></span>
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: partner.accentColor, opacity: 0.6 }}
                    ></span>
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: partner.accentColor, opacity: 0.3 }}
                    ></span>
                  </div>
                  <div className="text-blue-400 text-sm font-medium flex items-center group-hover:text-blue-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Partner Logos */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
              <p className="text-gray-400">Our partner ecosystem continues to grow as we expand our capabilities</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 py-8 px-4 bg-gray-800 bg-opacity-30 rounded-xl">
              {partners.map(partner => (
                <img 
                  key={partner.id} 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className="h-10 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  onClick={() => setActivePartner(partner)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Benefits */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Seamless <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Integration</span>
              </h2>
              <p className="text-blue-100 mb-6">
                Our partnership approach ensures that all technologies work together seamlessly, creating a cohesive ecosystem that enhances your investment workflows without disruption.
              </p>
              <ul className="space-y-4">
                {[
                  "Easy connection to your existing data systems",
                  "Pre-built connectors for common investment platforms",
                  "Unified security and access control framework",
                  "Consistent user experience across all solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setShowContactForm(true)}
              >
                Discuss Your Integration Needs
              </button>
            </div>
            <div>
              <div className="relative">
                {/* Abstract integration visualization */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative z-10">
                  <div className="mb-6">
                    <div className="text-xl font-bold text-white mb-2">Integration Architecture</div>
                    <p className="text-gray-400 text-sm">Unified ecosystem of partner technologies</p>
                  </div>
                  
                  {/* Integration diagram */}
                  <div className="relative h-64 flex items-center justify-center">
                    {/* Center hub */}
                    <div className="absolute w-24 h-24 rounded-full bg-blue-900 bg-opacity-30 border border-blue-800 flex items-center justify-center z-20">
                      <div className="text-white text-center">
                        <div className="text-sm font-bold">ITILITI.ai</div>
                        <div className="text-xs">Core Platform</div>
                      </div>
                    </div>
                    
                    {/* Connection lines */}
                    <svg width="100%" height="100%" viewBox="0 0 300 300" className="absolute inset-0">
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>
                      
                      {/* Connecting lines to partner nodes */}
                      <line x1="150" y1="150" x2="70" y2="80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="150" y1="150" x2="230" y2="80" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="150" y1="150" x2="230" y2="220" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="150" y1="150" x2="70" y2="220" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="150" y1="150" x2="150" y2="50" stroke="#00a4ef" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                    
                    {/* Partner nodes */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        <img src="/Microsoft.png" alt="Microsoft" className="w-full h-auto" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        <img src="/BlueFlame.png" alt="BlueFlame" className="w-full h-auto" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        <img src="/Apex.svg" alt="ApexHQ" className="w-full h-auto" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        <img src="/Direktiv.svg" alt="Direktiv" className="w-full h-auto" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                        <img src="/archTIS.svg" alt="archTIS" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-blue-600 opacity-5 blur-xl rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Become a Partner */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem to create innovative AI solutions for the alternative investment industry. We're looking for technology providers with complementary capabilities.
            </p>
            <button 
              className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => {
                setContactForm(prev => ({...prev, partnerInterest: 'become-partner'}));
                setShowContactForm(true);
              }}
            >
              Apply to Become a Partner
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Investment Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our partner-powered AI solutions can address your specific challenges.
          </p>
          <button 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            onClick={() => {
              setContactForm(prev => ({...prev, partnerInterest: 'demo'}));
              setShowContactForm(true);
            }}
          >
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-md w-full p-6 relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowContactForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="bg-green-500 bg-opacity-20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  Your message has been received. Our team will contact you shortly to discuss your partnership interests.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">
                  {contactForm.partnerInterest === 'become-partner' 
                    ? 'Apply to Become a Partner' 
                    : contactForm.partnerInterest === 'demo'
                      ? 'Schedule a Demo'
                      : 'Contact Us About Partnerships'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600 focus:outline-none focus:border-blue-500 min-h-24"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {contactForm.partnerInterest === 'become-partner' 
                        ? 'Submit Application' 
                        : contactForm.partnerInterest === 'demo'
                          ? 'Request Demo'
                          : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Partner Detail Modal */}
      {activePartner && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-4xl w-full p-6 relative my-8 mx-auto">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setActivePartner(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 h-full">
                  <div className="h-16 mb-6 flex items-center">
                    <img 
                      src={activePartner.logoUrl} 
                      alt={activePartner.name} 
                      className="h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{activePartner.name}</h3>
                  <p className="text-blue-300 mb-6">{activePartner.slogan}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      {activePartner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-blue-500 mr-2 mt-0.5">•</div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    onClick={() => {
                      setActivePartner(null);
                      setContactForm(prev => ({
                        ...prev, 
                        partnerInterest: `integration-${activePartner.id}`,
                        message: `I'm interested in learning more about how ${activePartner.name} integration can benefit my firm.`
                      }));
                      setShowContactForm(true);
                    }}
                  >
                    Discuss Integration
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Partnership Overview
                </h3>
                
                <div 
                  className="h-1 w-24 rounded mb-6"
                  style={{ backgroundColor: activePartner.accentColor }}
                ></div>
                
                <p className="text-gray-300 mb-8">{activePartner.description}</p>
                
                <h4 className="text-white font-bold mb-4">Use Cases</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activePartner.useCases.map((useCase, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-700"
                    >
                      <h5 className="text-white font-medium mb-2">{useCase.title}</h5>
                      <p className="text-gray-400 text-sm">{useCase.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Enterprise-Grade Security
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Our partnership with {activePartner.name} includes rigorous security controls and compliance measures appropriate for sensitive investment data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <AIFooter />
      
      {/* Chat Assistant */}
      <AIChatAssistant />
      
      {/* Custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PartnersPage;