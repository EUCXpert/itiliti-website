import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PartnerProductShowcase = () => {
  const [activePartner, setActivePartner] = useState(null);
  
  const partners = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      description: 'Enterprise AI solutions powered by Azure OpenAI and Microsoft Copilot.',
      logo: '/Microsoft.png',
      color: '#00a4ef',
      products: [
        'Azure OpenAI Services',
        'Copilot for Microsoft 365',
        'Azure Machine Learning',
        'Power Platform AI'
      ]
    },
    {
      id: 'blueflame',
      name: 'BlueFlame.ai',
      description: 'Advanced Natural Language Processing for investment document analysis.',
      logo: '/BlueFlame.png',
      color: '#3b82f6',
      products: [
        'DocumentAI Engine',
        'Investment Insights Platform',
        'Semantic Search Technology',
        'NLP Data Pipeline'
      ]
    },
    {
      id: 'apexhq',
      name: 'ApexHQ.ai',
      description: 'AI-driven investment research and market intelligence platform.',
      logo: '/Apex.svg',
      color: '#8b5cf6',
      products: [
        'Market Intelligence Suite',
        'Alpha Signal Generator',
        'Portfolio Optimization AI',
        'Risk Analytics Platform'
      ]
    },
    {
      id: 'direktiv',
      name: 'Direktiv.io',
      description: 'Workflow automation with embedded AI for investment processes.',
      logo: '/Direktiv.svg',
      color: '#ec4899',
      products: [
        'Process Automation Suite',
        'Decision Intelligence Platform',
        'Smart Workflow Engine',
        'Integration Framework'
      ]
    },
    {
      id: 'archtis',
      name: 'archTIS',
      description: 'AI-enhanced security and compliance for sensitive investment data.',
      logo: '/archTIS.svg',
      color: '#10b981',
      products: [
        'Security Intelligence',
        'Compliance Guardian',
        'Attribute-Based Access Control',
        'Secure Collaboration Suite'
      ]
    }
  ];

  // Set initial active partner
  useEffect(() => {
    setActivePartner(partners[0]);
  }, []);

  // Particle background effect for each partner card
  const ParticleBackground = ({ color }) => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Powered by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Industry Leaders</span></h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            We partner with premier AI technology providers to deliver cutting-edge solutions tailored for alternative investment.
          </p>
        </motion.div>

        {/* Partner Selection Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partners.map((partner) => (
            <motion.button
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 border ${
                activePartner?.id === partner.id
                  ? 'bg-gray-800 border-blue-500 shadow-glow text-white'
                  : 'bg-gray-800 bg-opacity-50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
              }`}
              onClick={() => setActivePartner(partner)}
            >
              {partner.name}
            </motion.button>
          ))}
        </div>

        {/* Active Partner Showcase */}
        {activePartner && (
          <motion.div
            key={activePartner.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 relative z-10"
          >
            <ParticleBackground color={activePartner.color} />
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="mr-4 flex-shrink-0">
                    <img src={activePartner.logo} alt={activePartner.name} className="h-12" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{activePartner.name}</h3>
                    <div className="h-1 w-20 bg-gradient-to-r rounded-full mt-2" style={{ backgroundImage: `linear-gradient(to right, ${activePartner.color}, transparent)` }}></div>
                  </div>
                </div>
                
                <p className="text-blue-100 text-lg mb-8">{activePartner.description}</p>
                
                <button className="w-fit px-6 py-3 rounded-lg bg-opacity-20 border border-gray-700 text-white hover:bg-gray-700 transition-colors flex items-center">
                  Explore Integration
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-white mb-6">Featured Solutions</h4>
                <div className="grid grid-cols-1 gap-4">
                  {activePartner.products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-700 bg-opacity-30 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-glow cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: `${activePartner.color}20`, borderColor: activePartner.color, borderWidth: '1px' }}>
                          <svg className="h-5 w-5" style={{ color: activePartner.color }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-white font-medium">{product}</h5>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Custom styles for animations and effects */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PartnerProductShowcase;