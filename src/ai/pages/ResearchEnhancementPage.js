import React from 'react';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../../ai/components/common/AIFooter';
import VisualDataDemo from '../../ai/components/common/VisualDataDemo';
import ROICalculator from '../../ai/components/common/ROICalculator';

const ResearchEnhancementPage = () => {
  // Research-specific capabilities
  const researchCapabilities = [
    "Process thousands of documents in seconds",
    "Extract key insights from financial reports",
    "Analyze sentiment across earnings calls",
    "Identify non-obvious connections between companies",
    "Track market signals from disparate data sources"
  ];

  // Custom ROI metrics for research
  const customMetrics = [
    { name: 'docComplexity', label: 'Document Complexity', min: 1, max: 5, defaultValue: 3, unit: '' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Research Enhancement <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">AI</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources to identify signals human analysts might miss.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Key Capabilities Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mr-4 border border-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
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
      
      {/* Research Workflow Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-blue-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Research Workflow</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            Our AI research enhancement solution streamlines every stage of the investment research process.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Stage 1 */}
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mr-4 border border-blue-800 text-blue-400 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-white font-bold">Data Ingestion</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Automatically process thousands of documents, filings, transcripts, and news articles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">SEC filings & disclosures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Earnings call transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Research reports & news</span>
                  </li>
                </ul>
              </div>
              
              {/* Stage 2 */}
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mr-4 border border-blue-800 text-blue-400 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-white font-bold">AI Analysis</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our AI extracts key data points, identifies patterns, and generates actionable insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Entity & relationship mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Sentiment & tone analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Key metrics extraction</span>
                  </li>
                </ul>
              </div>
              
              {/* Stage 3 */}
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center mr-4 border border-blue-800 text-blue-400 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-white font-bold">Research Insights</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Generate comprehensive research insights and investment signals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Customized research briefs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Risk & opportunity flagging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">Interactive visualization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            See It In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Action</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            Experience how our AI transforms research workflows with instant document analysis and insight extraction.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <VisualDataDemo demoType="sentiment" title="Sentiment Analysis Demo" />
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <VisualDataDemo demoType="document" title="Document Analysis Demo" />
          </div>
        </div>
      </div>
      
      {/* ROI Calculator Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-blue-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">ROI</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            See how much time and money your team could save with AI-powered research.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ROICalculator 
              serviceName="Research Enhancement AI" 
              defaultValues={{
                teamSize: 8,
                hoursPerWeek: 25,
                avgSalary: 175000,
                efficiencyGain: 40,
                additionalRevenue: 15
              }}
              customMetrics={customMetrics}
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-blue-800">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  DR
                </div>
              </div>
              <div>
                <blockquote className="text-xl text-white italic mb-4">
                  "We're now able to cover 3x more companies with the same research team, giving us a significant edge in identifying opportunities that others miss. The AI doesn't replace our analysts - it supercharges them."
                </blockquote>
                <div className="text-blue-300 font-medium">Director of Research</div>
                <div className="text-gray-400 text-sm">Quant Hedge Fund</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Research Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading investment firms already using our AI to gain a competitive edge in their research workflows.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />

    </div>
  );
};

export default ResearchEnhancementPage;