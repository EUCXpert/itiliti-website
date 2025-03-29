import React from 'react';
import { 
  Shield, 
  Lightbulb, 
  BrainCircuit, 
  ArrowDown, 
  CheckCircle, 
  Target, 
  Lock,
  Zap,
  Settings
} from 'lucide-react';

const IntegratedTechnologyStrategy = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Integration Imperative</h2>
            <p className="text-xl text-gray-700">
              For boutique alternative investment firms, maximum impact comes from implementing these technologies 
              as part of a cohesive strategy rather than as isolated initiatives.
            </p>
          </div>
          
          {/* Strategic Sequence */}
          <div className="relative mb-16">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 z-0"></div>
            
            {/* Phase 1 */}
            <div className="relative z-10 mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 rounded-full h-14 w-14 flex items-center justify-center text-white">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. Establish Security Foundations</h3>
                <p className="text-gray-700 mb-4">
                  Begin with a comprehensive security framework that satisfies regulatory requirements and 
                  institutional investor expectations. This creates the stable foundation for all other technology initiatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Identity and access management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Data protection controls</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Endpoint security</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Compliance frameworks</span>
                  </div>
                </div>
              </div>
              {/* Down arrow */}
              <div className="flex justify-center my-4">
                <ArrowDown className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="relative z-10 mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-600 rounded-full h-14 w-14 flex items-center justify-center text-white">
                  <Lightbulb className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-purple-800 mb-3">2. Optimize Microsoft Environment</h3>
                <p className="text-gray-700 mb-4">
                  With security foundations in place, optimize your Microsoft technology stack to reduce costs, enhance capabilities, 
                  and create a platform for advanced services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">License optimization</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Azure cloud right-sizing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Security stack consolidation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Collaboration enhancements</span>
                  </div>
                </div>
              </div>
              {/* Down arrow */}
              <div className="flex justify-center my-4">
                <ArrowDown className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-600 rounded-full h-14 w-14 flex items-center justify-center text-white">
                  <BrainCircuit className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">3. Build Advanced Capabilities</h3>
                <p className="text-gray-700 mb-4">
                  With secure foundations and optimized infrastructure in place, implement advanced capabilities 
                  like workflow automation and AI to transform investment operations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Workflow automation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">AI-powered research</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Automated due diligence</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Advanced analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits of Integration */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Benefits of Integration</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">
                      <Lock className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-center mb-3">Enhanced Security Posture</h4>
                  <p className="text-sm text-center">
                    Each layer reinforces the others, creating comprehensive protection without gaps or vulnerabilities.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">
                      <Zap className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-center mb-3">Accelerated Implementation</h4>
                  <p className="text-sm text-center">
                    Each phase builds on previous work, reducing implementation time and change management challenges.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">
                      <Settings className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-center mb-3">Operational Efficiency</h4>
                  <p className="text-sm text-center">
                    Integrated systems eliminate data silos and redundant processes, creating multiplicative productivity gains.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg">
                  This integrated approach allows boutique firms to achieve enterprise-grade capabilities while respecting their resource 
                  constraints and specialized requirements - effectively bridging the enterprise-boutique gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedTechnologyStrategy;