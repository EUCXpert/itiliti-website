import React from 'react';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../components/common/AIFooter';
//import VisualDataDemo from '../components/common/VisualDataDemo';
import ROICalculator from '../components/common/ROICalculator';

const MarketTrendAnalysisPage = () => {
    // Market Trend-specific capabilities
    const marketTrendCapabilities = [
      "Real-time sentiment analysis of news and social media",
      "Early trend detection (2-3 weeks ahead of markets)",
      "Pattern detection across disparate data sources",
      "Sector rotation prediction with confidence scoring",
      "ESG factor monitoring and impact assessment",
      "Automated alert system for anomaly detection"
    ];
  
    // Custom metrics for market trend analysis
    const customMetrics = [
      { name: 'dataSources', label: 'Data Source Coverage', min: 20, max: 100, step: 10, defaultValue: 50, unit: '%' },
      { name: 'trendSensitivity', label: 'Trend Sensitivity', min: 1, max: 5, defaultValue: 3, unit: '' }
    ];
  
    return (
      <div className="bg-gray-900 min-h-screen">
        {/* Navigation */}
        <AINavigation />
        
        {/* Hero Section */}
        <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-sky-900 to-indigo-900">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Market Trend <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Analysis</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data to gain market insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-sky-500/20 transition-all duration-300">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-transparent border border-sky-400 text-sky-300 font-medium rounded-lg hover:bg-sky-900 hover:bg-opacity-30 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
        </div>
        
        {/* Key Capabilities Section */}
        <div className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">Capabilities</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketTrendCapabilities.map((capability, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-sky-500 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-900 bg-opacity-30 flex items-center justify-center mr-4 border border-sky-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium">{capability}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline labels */}
            <div className="flex justify-between mt-6 text-center">
              <div className="w-1/4">
                <span className="text-sky-400 font-medium">2-3 weeks ahead</span>
              </div>
              <div className="w-1/4">
                <span className="text-indigo-400 font-medium">1-2 weeks ahead</span>
              </div>
              <div className="w-1/4">
                <span className="text-blue-400 font-medium">Days ahead</span>
              </div>
              <div className="w-1/4">
                <span className="text-gray-400 font-medium">Current</span>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-16 bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-sky-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-sky-900 bg-opacity-30 flex items-center justify-center mr-4 border border-sky-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white font-bold">Why Early Detection Matters</h3>
              </div>
              <p className="text-gray-300">
                Our AI typically identifies emerging trends 2-3 weeks before they become widely recognized in the market. This early insight gives you a significant edge, allowing time to position investments strategically, adjust portfolio allocations, or implement risk management measures ahead of market movements.
              </p>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator Section */}
        <div className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">ROI</span>
            </h2>
            <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
              See how early trend identification can impact your investment performance.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <ROICalculator 
                serviceName="Market Trend Analysis AI" 
                defaultValues={{
                  teamSize: 7,
                  hoursPerWeek: 25,
                  avgSalary: 185000,
                  efficiencyGain: 45,
                  additionalRevenue: 20
                }}
                customMetrics={customMetrics}
              />
            </div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="py-20 px-6 bg-gradient-to-r from-sky-900 to-indigo-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Stories</span>
            </h2>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-sky-800">
                <div className="text-sky-400 text-4xl font-bold mb-4">2.5x</div>
                <h3 className="text-white font-bold mb-2">Return Improvement</h3>
                <p className="text-gray-300 text-sm">
                  Long/short equity fund improved returns by identifying sector rotation trends weeks before mainstream recognition.
                </p>
              </div>
              
              {/* Success Story 2 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-indigo-800">
                <div className="text-indigo-400 text-4xl font-bold mb-4">32%</div>
                <h3 className="text-white font-bold mb-2">Risk Reduction</h3>
                <p className="text-gray-300 text-sm">
                  Multi-strategy fund reduced drawdowns by identifying potential market risks from sentiment analysis.
                </p>
              </div>
              
              {/* Success Story 3 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-blue-800">
                <div className="text-blue-400 text-4xl font-bold mb-4">8x</div>
                <h3 className="text-white font-bold mb-2">Research Coverage</h3>
                <p className="text-gray-300 text-sm">
                  Research team expanded coverage capabilities across sectors and regions without additional headcount.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Stay Ahead of Market Trends?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading investment firms already using our AI to identify trends before they become obvious to the market.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-sky-500/20 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <AIFooter />

      </div>
    );
  };
  
  export default MarketTrendAnalysisPage;