import React from 'react'
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../../ai/components/common/AIFooter';
import VisualDataDemo from '../../ai/components/common/VisualDataDemo';
import ROICalculator from '../../ai/components/common/ROICalculator';

const DueDiligenceAccelerationPage = () => {
  // Due Diligence-specific capabilities
  const dueDiligenceCapabilities = [
    "Automate data extraction from legal documents",
    "Identify inconsistencies across deal documentation",
    "Flag potential risks and compliance issues",
    "Generate comprehensive summary reports",
    "Track key terms and conditions"
  ];

  // Custom ROI metrics for due diligence
  const customMetrics = [
    { name: 'dealComplexity', label: 'Deal Complexity', min: 1, max: 5, defaultValue: 3, unit: '' },
    { name: 'riskTolerance', label: 'Risk Tolerance', min: 1, max: 5, defaultValue: 3, unit: '' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Due Diligence <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Acceleration</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Streamline document-heavy due diligence by automatically extracting key data points from contracts, financial statements, and regulatory filings.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-purple-400 text-purple-300 font-medium rounded-lg hover:bg-purple-900 hover:bg-opacity-30 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Key Capabilities Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dueDiligenceCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900 bg-opacity-30 flex items-center justify-center mr-4 border border-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
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
      
      {/* Process Timeline Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-purple-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Due Diligence <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline track */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-900 transform -translate-x-1/2"></div>
            
            {/* Timeline steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-10 h-10 bg-purple-900 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-auto w-5/12 pr-16">
                  <h3 className="text-2xl font-bold text-white mb-2">Document Upload</h3>
                  <p className="text-gray-300">
                    Securely upload all due diligence materials through our encrypted portal or integrate with your document management system.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-10 h-10 bg-purple-900 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="mr-auto w-5/12 pl-16 ml-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">AI Processing</h3>
                  <p className="text-gray-300">
                    Our AI analyzes all documents, extracting key information, categorizing content, and identifying potential risks and inconsistencies.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-10 h-10 bg-purple-900 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-auto w-5/12 pr-16">
                  <h3 className="text-2xl font-bold text-white mb-2">Review & Collaborate</h3>
                  <p className="text-gray-300">
                    Team members review AI findings, collaborate on issues, and request additional analysis within the platform.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 w-10 h-10 bg-purple-900 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="mr-auto w-5/12 pl-16 ml-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">Report Generation</h3>
                  <p className="text-gray-300">
                    Generate comprehensive reports with key findings, risk assessments, and actionable insights to support decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            See It In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">Action</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            Experience how our AI accelerates due diligence workflows with automated document analysis.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <VisualDataDemo demoType="document" title="Document Analysis Demo" />
          </div>
        </div>
      </div>
      
      {/* ROI Calculator Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-purple-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">ROI</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            See how much time and money your team could save with AI-powered due diligence.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ROICalculator 
              serviceName="Due Diligence Acceleration" 
              defaultValues={{
                teamSize: 6,
                hoursPerWeek: 30,
                avgSalary: 185000,
                efficiencyGain: 65,
                additionalRevenue: 10
              }}
              customMetrics={customMetrics}
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-purple-800">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  PE
                </div>
              </div>
              <div>
                <blockquote className="text-xl text-white italic mb-4">
                  "What previously took weeks of document review now takes hours, allowing us to evaluate twice as many potential investments and conduct deeper analysis on the most promising ones."
                </blockquote>
                <div className="text-purple-300 font-medium">Investment Director</div>
                <div className="text-gray-400 text-sm">Leading Private Equity Firm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Due Diligence Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading investment firms already using our AI to transform their due diligence workflows.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />
      
    </div>
  );
};

export default DueDiligenceAccelerationPage;
