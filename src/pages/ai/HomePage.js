import React from 'react';
import AIHeroSection from '../../components/ai-site/home/AIHeroSection';
import PartnerProductShowcase from '../../components/ai-site/home/PartnerProductShowcase';
import AICapabilitiesSection from '../../components/ai-site/home/AICapabilitiesSection';
import BusinessOutcomesSection from '../../components/ai-site/home/BusinessOutcomesSection';
import AIChatAssistant from '../../components/ai-site/common/AIChatAssistant';
import AINavigation from '../../components/ai-site/common/AINavigation';
import AIFooter from '../../components/ai-site/common/AIFooter';

const AIHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <AINavigation />
      
      {/* Hero Section */}
      <AIHeroSection />
      
      {/* Partner & Product Showcase */}
      <PartnerProductShowcase />
      
      {/* AI Capabilities Section */}
      <AICapabilitiesSection />
      
      {/* Floating AI Feature Highlight */}
      <div className="relative overflow-hidden py-16">
        {/* Background decoration - circuit pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 L100 50 M50 0 L50 100" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <circle cx="0" cy="50" r="3" fill="white" />
                <circle cx="100" cy="50" r="3" fill="white" />
                <circle cx="50" cy="0" r="3" fill="white" />
                <circle cx="50" cy="100" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Generative AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Reimagined</span> for Alternative Investment</h2>
                <p className="text-blue-100 text-lg mb-8">
                  Our AI solutions go beyond generic capabilities to deliver specialized intelligence that understands the nuances of alternative investment strategies, documents, and workflows.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom-trained on investment domain knowledge",
                    "Specialized for financial document understanding",
                    "Optimized for alternative investment workflows",
                    "Enhanced with industry-specific guardrails"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 overflow-hidden shadow-lg relative">
                {/* Abstract data visualization */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="2">
                      <path d="M0,100 Q200,50 400,100 T800,100" />
                      <path d="M0,200 Q200,150 400,200 T800,200" />
                      <path d="M0,300 Q200,250 400,300 T800,300" />
                      <path d="M0,400 Q200,350 400,400 T800,400" />
                      <path d="M0,500 Q200,450 400,500 T800,500" />
                    </g>
                    <g fill="rgba(59, 130, 246, 0.5)">
                      <circle cx="100" cy="100" r="5" />
                      <circle cx="300" cy="200" r="5" />
                      <circle cx="500" cy="300" r="5" />
                      <circle cx="700" cy="400" r="5" />
                      <circle cx="200" cy="500" r="5" />
                    </g>
                  </svg>
                </div>
                
                <div className="p-8 relative z-10">
                  <h3 className="text-white text-xl font-bold mb-6">Interactive AI Demo</h3>
                  
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-4">
                    <div className="text-gray-400 text-sm mb-2">Example User Input:</div>
                    <div className="text-white">Analyze the risk factors in the latest quarterly report for ACME Corp.</div>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
                    <div className="text-blue-300 text-sm mb-2">AI Response:</div>
                    <div className="text-white mb-4">
                      I've analyzed ACME Corp's Q3 2024 report and identified these key risk factors:
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">●</span>
                        <span className="text-blue-100">Supply chain disruptions mentioned on pages 12-14 show a 15% increase in delivery delays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">●</span>
                        <span className="text-blue-100">New regulatory challenges in European markets (p.23) may impact Q4 revenue by 5-8%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">●</span>
                        <span className="text-blue-100">Cash reserves have increased by 12%, providing greater stability against identified risks</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Try Interactive Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Outcomes Section */}
      <BusinessOutcomesSection />
      
      {/* Case Studies Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">Stories</span></h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              See how alternative investment firms transform their operations with our AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-blue-500 transition-all duration-300 cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-medium text-blue-400">Hedge Fund</div>
                  <div className="text-sm text-gray-400">$2.4B AUM</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quantitative Strategy Enhancement</h3>
                <p className="text-gray-300 mb-4">Leveraged AI to analyze 10x more data sources and identify non-obvious market patterns.</p>
                <div className="flex items-center text-blue-300 group-hover:text-blue-400 transition-colors">
                  <span className="font-medium">Read Case Study</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-blue-500 transition-all duration-300 cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-medium text-purple-400">Private Equity</div>
                  <div className="text-sm text-gray-400">$850M AUM</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Due Diligence Transformation</h3>
                <p className="text-gray-300 mb-4">Reduced deal evaluation time by 65% while increasing the quality and depth of analysis.</p>
                <div className="flex items-center text-blue-300 group-hover:text-blue-400 transition-colors">
                  <span className="font-medium">Read Case Study</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-blue-500 transition-all duration-300 cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-medium text-emerald-400">Family Office</div>
                  <div className="text-sm text-gray-400">$1.2B AUM</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Asset Portfolio Intelligence</h3>
                <p className="text-gray-300 mb-4">Gained comprehensive visibility across diverse assets with AI-driven portfolio analytics.</p>
                <div className="flex items-center text-blue-300 group-hover:text-blue-400 transition-colors">
                  <span className="font-medium">Read Case Study</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background with animated gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite'
          }}
        ></div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Reimagine What AI Can Do?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Experience the power of AI solutions built specifically for alternative investment. Schedule a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />
      
      {/* AI Chat Assistant */}
      <AIChatAssistant />
      
      {/* Custom styles */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AIHomePage;