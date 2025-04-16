import React from 'react';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../components/common/AIFooter';
import AIChatAssistant from '../components/common/AIChatAssistant';
import VisualDataDemo from '../components/common/VisualDataDemo';
import ROICalculator from '../components/common/ROICalculator';

const RegulatoryCompliancePage = () => {
  // Regulatory Compliance-specific capabilities
  const complianceCapabilities = [
    "Continuous monitoring of regulatory changes",
    "Automated gap analysis against current controls",
    "Pre-built templates for SEC, FINRA filings",
    "AI-powered document verification",
    "Real-time compliance risk assessment",
    "Automated regulatory reporting"
  ];

  // Custom metrics for compliance
  const customMetrics = [
    { name: 'regulatoryScope', label: 'Regulatory Scope', min: 1, max: 5, defaultValue: 3, unit: '' },
    { name: 'complexityFactor', label: 'Compliance Complexity', min: 1, max: 5, defaultValue: 3, unit: '' }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-amber-900 to-red-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Regulatory <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-400">Compliance AI</span>
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Stay ahead of regulatory requirements with AI that monitors rule changes, identifies compliance gaps, and automates reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white font-medium rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-amber-400 text-amber-300 font-medium rounded-lg hover:bg-amber-900 hover:bg-opacity-30 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Key Capabilities Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900 bg-opacity-30 flex items-center justify-center mr-4 border border-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
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
      
      {/* Regulatory Coverage Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-amber-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Regulatory Coverage</span>
          </h2>
          <p className="text-amber-200 text-center max-w-3xl mx-auto mb-12">
            Our AI monitors and supports compliance across all major regulatory frameworks relevant to alternative investments.
          </p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* SEC */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-xl">
                SEC
              </div>
              <h3 className="text-white font-bold mb-1">SEC</h3>
              <p className="text-gray-400 text-xs">
                Form ADV, Form PF, 13F Filings
              </p>
            </div>
            
            {/* FINRA */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                FINRA
              </div>
              <h3 className="text-white font-bold mb-1">FINRA</h3>
              <p className="text-gray-400 text-xs">
                Rule 2111, Rule 2210, Rule 3110
              </p>
            </div>
            
            {/* CFTC */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                CFTC
              </div>
              <h3 className="text-white font-bold mb-1">CFTC</h3>
              <p className="text-gray-400 text-xs">
                Form CPO-PQR, Parts 4 & 45
              </p>
            </div>
            
            {/* NFA */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                NFA
              </div>
              <h3 className="text-white font-bold mb-1">NFA</h3>
              <p className="text-gray-400 text-xs">
                Series 3, 7, 65 Requirements
              </p>
            </div>
            
            {/* GDPR */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                GDPR
              </div>
              <h3 className="text-white font-bold mb-1">GDPR</h3>
              <p className="text-gray-400 text-xs">
                Data Protection & Privacy
              </p>
            </div>
            
            {/* AML */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                AML
              </div>
              <h3 className="text-white font-bold mb-1">AML</h3>
              <p className="text-gray-400 text-xs">
                BSA, KYC, Suspicious Activity
              </p>
            </div>
            
            {/* AIFMD */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                AIFMD
              </div>
              <h3 className="text-white font-bold mb-1">AIFMD</h3>
              <p className="text-gray-400 text-xs">
                EU Alternative Investment Fund
              </p>
            </div>
            
            {/* FATCA */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5 border border-gray-700 text-center">
              <div className="w-14 h-14 mx-auto bg-amber-900 bg-opacity-30 rounded-full flex items-center justify-center mb-3 border border-amber-800 text-amber-400 font-bold text-lg">
                FATCA
              </div>
              <h3 className="text-white font-bold mb-1">FATCA</h3>
              <p className="text-gray-400 text-xs">
                Foreign Account Tax Compliance
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Works</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="bg-amber-900 bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-amber-800">
                  <span className="text-amber-400 text-4xl font-bold">1</span>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">Continuous Regulatory Monitoring</h3>
                <p className="text-gray-300">
                  Our AI continuously scans thousands of regulatory sources, updates, and interpretations across jurisdictions. It identifies changes and updates that are relevant to your business, categorizing them by urgency, impact, and required action.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 md:order-2">
                <div className="bg-amber-900 bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-amber-800">
                  <span className="text-amber-400 text-4xl font-bold">2</span>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">Smart Gap Analysis</h3>
                <p className="text-gray-300">
                  The system automatically compares your existing compliance framework against new requirements, identifying potential gaps. It analyzes your documents, policies, and procedures to assess compliance readiness and highlights areas needing attention.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="bg-amber-900 bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-amber-800">
                  <span className="text-amber-400 text-4xl font-bold">3</span>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">Automated Documentation & Filings</h3>
                <p className="text-gray-300">
                  AI-assisted preparation of regulatory filings, reports, and disclosures using pre-built templates that adapt to your specific data. The system extracts relevant information from your documents and systems to populate required forms accurately.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 md:order-2">
                <div className="bg-amber-900 bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-amber-800">
                  <span className="text-amber-400 text-4xl font-bold">4</span>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">Ongoing Compliance Dashboard</h3>
                <p className="text-gray-300">
                  A comprehensive dashboard provides real-time visibility into your compliance status, upcoming deadlines, potential issues, and historical performance. Customizable alerts notify your team of critical actions needed to maintain compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Document Demo Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-amber-900 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            See It In <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Action</span>
          </h2>
          <p className="text-amber-200 text-center max-w-3xl mx-auto mb-12">
            Experience how our AI analyzes regulatory documents and identifies compliance requirements.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <VisualDataDemo demoType="document" title="Regulatory Document Analysis Demo" />
          </div>
        </div>
      </div>
      
      {/* ROI Calculator Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">ROI</span>
          </h2>
          <p className="text-amber-200 text-center max-w-3xl mx-auto mb-12">
            See how AI-powered compliance can reduce costs and risks for your firm.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ROICalculator 
              serviceName="Regulatory Compliance AI" 
              defaultValues={{
                teamSize: 4,
                hoursPerWeek: 15,
                avgSalary: 165000,
                efficiencyGain: 60,
                additionalRevenue: 5
              }}
              customMetrics={customMetrics}
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial and Key Benefits */}
      <div className="py-20 px-6 bg-gradient-to-r from-amber-900 to-red-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Testimonial */}
            <div className="bg-gray-800 bg-opacity-30 rounded-xl p-8 border border-amber-800 mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    CCO
                  </div>
                </div>
                <div>
                  <blockquote className="text-xl text-white italic mb-4">
                    "Our compliance team now spends 65% less time on routine documentation and monitoring, allowing them to focus on strategic risk management and providing more value to the business."
                  </blockquote>
                  <div className="text-amber-300 font-medium">Chief Compliance Officer</div>
                  <div className="text-gray-400 text-sm">Global Alternative Asset Manager</div>
                </div>
              </div>
            </div>
            
            {/* Key Benefits */}
            <h3 className="text-2xl font-bold text-white text-center mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-amber-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-900 bg-opacity-30 flex items-center justify-center mr-4 border border-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Time Savings</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Reduce compliance workload by up to 70% through automation of routine monitoring, documentation, and reporting tasks.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-amber-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-900 bg-opacity-30 flex items-center justify-center mr-4 border border-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Risk Reduction</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Reduce the risk of non-compliance, fines, and regulatory actions through comprehensive coverage and proactive monitoring.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 border border-amber-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-900 bg-opacity-30 flex items-center justify-center mr-4 border border-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Scalability</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Easily scale compliance operations as your business grows or enters new jurisdictions without proportional increases in headcount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Join leading investment firms already using our AI to streamline regulatory compliance and reduce risk.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white font-medium rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />
      
      {/* Floating Chat Assistant */}
      <AIChatAssistant />

    </div>
  );
};

export default RegulatoryCompliancePage;