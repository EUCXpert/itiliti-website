import React from 'react';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../components/common/AIFooter';
import VisualDataDemo from '../components/common/VisualDataDemo';
import ROICalculator from '../components/common/ROICalculator';

const PortfolioAnalyticsPage = () => {
  // Portfolio Analytics-specific capabilities
  const portfolioCapabilities = [
    "Multi-factor correlation analysis",
    "Automated performance attribution",
    "Risk exposure identification",
    "Scenario modeling with ML predictions",
    "Hidden pattern discovery",
    "Custom benchmarking with adaptive metrics"
  ];

  // Custom metrics for portfolio analytics
  const customMetrics = [
    { name: 'portfolioSize', label: 'Portfolio Size ($B AUM)', min: 0.1, max: 10, step: 0.1, defaultValue: 1, unit: 'B' },
    { name: 'riskSensitivity', label: 'Risk Sensitivity', min: 1, max: 5, defaultValue: 3, unit: '' }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-emerald-900 to-blue-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Portfolio <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Analytics</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Enhance portfolio insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-emerald-400 text-emerald-300 font-medium rounded-lg hover:bg-emerald-900 hover:bg-opacity-30 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Key Capabilities Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 bg-opacity-30 flex items-center justify-center mr-4 border border-emerald-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">{capability}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Demo Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            See It In <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Action</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <VisualDataDemo demoType="portfolio" title="Portfolio Risk Analysis Demo" />
          </div>
        </div>
      </div>
      
      {/* Features Comparison Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Traditional vs <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">AI-Driven</span> Analytics
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Traditional Analytics */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Traditional Analytics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Limited to pre-defined metrics and relationships</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Time-consuming manual analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Backward-looking only</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Misses non-obvious correlations</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Static reporting cycles</span>
                </li>
              </ul>
            </div>
            
            {/* AI-Driven Analytics */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-emerald-700">
              <h3 className="text-xl font-bold text-white mb-6 text-center">AI-Driven Analytics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Discovers hidden patterns and relationships</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Automated analysis in seconds</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Predictive modeling and scenario analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Identifies non-obvious risk exposures</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Real-time portfolio monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* ROI Calculator Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">ROI</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            See how much AI-powered analytics can improve your portfolio performance.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ROICalculator 
              serviceName="Portfolio Analytics AI" 
              defaultValues={{
                teamSize: 5,
                hoursPerWeek: 20,
                avgSalary: 200000,
                efficiencyGain: 35,
                additionalRevenue: 18
              }}
              customMetrics={customMetrics}
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-emerald-900 to-blue-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-30 rounded-xl p-8 border border-emerald-800">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  PM
                </div>
              </div>
              <div>
                <blockquote className="text-xl text-white italic mb-4">
                  "The pattern recognition capabilities identified correlations in our portfolio that weren't obvious to our team, helping us reduce risk concentration and improve returns."
                </blockquote>
                <div className="text-emerald-300 font-medium">Portfolio Manager</div>
                <div className="text-gray-400 text-sm">Multi-Strategy Fund</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Portfolio Analytics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading investment firms already using our AI to enhance their portfolio management.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />
    </div>
  );
};

export default PortfolioAnalyticsPage;