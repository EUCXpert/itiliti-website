import React, { useState } from 'react';
import AINavigation from '../components/common/AINavigation';
import AIFooter from '../components/common/AIFooter';
import ROICalculator from '../components/common/ROICalculator';
import InteractivePortfolioVisualization from '../components/common/InteractivePortfolioVisualization';

const OutcomesPage = () => {
  const [activeOutcome, setActiveOutcome] = useState('operational');
  
  // Business outcomes data
  const outcomes = {
    operational: {
      title: "Operational Efficiency",
      description: "Transform your investment workflows with AI solutions that dramatically reduce manual effort and increase productivity.",
      stats: [
        { value: "65%", label: "Reduction in document processing time" },
        { value: "3.5x", label: "More companies analyzed per analyst" },
        { value: "40%", label: "Decrease in reporting cycle time" }
      ],
      testimonial: {
        quote: "Our team now accomplishes in hours what used to take days. The AI automatically extracts key information from financial documents, allowing our analysts to focus on higher-value activities.",
        author: "Operations Director",
        company: "Global Hedge Fund"
      },
      metrics: [
        { name: 'processVolume', label: 'Document Volume', min: 100, max: 1000, step: 100, defaultValue: 500, unit: 'docs' },
        { name: 'teamUtilization', label: 'Team Utilization', min: 1, max: 5, defaultValue: 3, unit: '' }
      ]
    },
    strategic: {
      title: "Strategic Advantage",
      description: "Gain a competitive edge with insights that help you identify opportunities and risks before they become obvious to the market.",
      stats: [
        { value: "2-3", label: "Weeks earlier trend identification" },
        { value: "18%", label: "Improvement in risk-adjusted returns" },
        { value: "78%", label: "Faster identification of emerging risks" }
      ],
      testimonial: {
        quote: "We're consistently identifying market shifts weeks before they become apparent to most investors, providing significant alpha generation opportunities that weren't possible with our previous tools.",
        author: "Chief Investment Officer",
        company: "Long/Short Equity Fund"
      },
      metrics: [
        { name: 'dataSources', label: 'Data Sources', min: 10, max: 100, step: 10, defaultValue: 50, unit: '' },
        { name: 'marketRapidity', label: 'Market Response Time', min: 1, max: 5, defaultValue: 3, unit: '' }
      ]
    },
    financial: {
      title: "Financial Performance",
      description: "Achieve measurable financial improvements through better decision-making, risk management, and operational cost reduction.",
      stats: [
        { value: "22%", label: "Average cost reduction" },
        { value: "15%", label: "Increase in analyst productivity" },
        { value: "2.5x", label: "ROI in first year" }
      ],
      testimonial: {
        quote: "The cost savings alone paid for the implementation within the first six months, but the real value has been in the improved investment decisions our team is able to make with the enhanced insights.",
        author: "Managing Partner",
        company: "Private Equity Firm"
      },
      metrics: [
        { name: 'investmentSize', label: 'AUM ($M)', min: 100, max: 5000, step: 100, defaultValue: 1000, unit: 'M' },
        { name: 'resourceAllocation', label: 'Resource Allocation', min: 1, max: 5, defaultValue: 3, unit: '' }
      ]
    },
    growth: {
      title: "Scalable Growth",
      description: "Expand your investment capacity without proportional increases in headcount, enabling sustainable growth and adaptability.",
      stats: [
        { value: "85%", label: "More deals evaluated" },
        { value: "4x", label: "Increase in research coverage" },
        { value: "60%", label: "Reduction in manual compliance tasks" }
      ],
      testimonial: {
        quote: "We've been able to double our AUM without adding headcount to our research and due diligence teams. The AI platform handles the increased volume seamlessly, allowing us to scale in a way that wouldn't have been possible otherwise.",
        author: "Head of Growth",
        company: "Multi-Strategy Investment Firm"
      },
      metrics: [
        { name: 'growthRate', label: 'Growth Rate (%)', min: 5, max: 50, step: 5, defaultValue: 20, unit: '%' },
        { name: 'scalingFactor', label: 'Scaling Capacity', min: 1, max: 5, defaultValue: 3, unit: '' }
      ]
    }
  };

  // Results data for case studies
  const caseStudies = [
    {
      type: "Hedge Fund",
      aum: "$2.4B AUM",
      title: "Quantitative Strategy Enhancement",
      results: [
        "85% reduction in data processing time",
        "3.2x increase in signals analyzed daily",
        "22% improvement in trading strategy performance"
      ],
      color: "blue"
    },
    {
      type: "Private Equity",
      aum: "$850M AUM",
      title: "Due Diligence Transformation",
      results: [
        "65% faster deal evaluation process",
        "2.5x more potential investments reviewed",
        "Identified critical risks missed in 28% of deals"
      ],
      color: "purple"
    },
    {
      type: "Family Office",
      aum: "$1.2B AUM",
      title: "Multi-Asset Portfolio Intelligence",
      results: [
        "Consolidated visibility across 14 asset classes",
        "Uncovered hidden correlation risks",
        "15% reduction in overall portfolio volatility"
      ],
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Navigation */}
      <AINavigation />
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Outcomes</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our AI solutions deliver measurable results with rapid implementation timelines and proven ROI across operational efficiency, strategic advantage, and financial performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3"></div>
      </div>
      
      {/* Outcomes Navigation Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Business Outcomes</span>
          </h2>
          
          {/* Outcome Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(outcomes).map(([key, outcome]) => (
              <button
                key={key}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeOutcome === key
                    ? 'bg-blue-600 text-white shadow-glow'
                    : 'bg-gray-800 bg-opacity-50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
                onClick={() => setActiveOutcome(key)}
              >
                {outcome.title}
              </button>
            ))}
          </div>
          
          {/* Active Outcome Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Stats & Description */}
            <div>
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 p-8 h-full">
                <h3 className="text-3xl font-bold text-white mb-6">{outcomes[activeOutcome].title}</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {outcomes[activeOutcome].stats.map((stat, index) => (
                    <div key={index} className="bg-gray-700 bg-opacity-40 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <p className="text-blue-100 mb-8">{outcomes[activeOutcome].description}</p>
                
                {/* Quote */}
                <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
                  <blockquote className="text-white italic mb-3">"{outcomes[activeOutcome].testimonial.quote}"</blockquote>
                  <div className="text-blue-300 text-sm">— {outcomes[activeOutcome].testimonial.author}, {outcomes[activeOutcome].testimonial.company}</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - ROI Calculator */}
            <div>
              <ROICalculator 
                serviceName={`${outcomes[activeOutcome].title} AI`} 
                defaultValues={{
                  teamSize: 10,
                  hoursPerWeek: 20,
                  avgSalary: 150000,
                  efficiencyGain: 40,
                  additionalRevenue: 15
                }}
                customMetrics={outcomes[activeOutcome].metrics}
              />
            </div>
          </div>
        </div>
      </div>
     
   
      {/* Demo Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            See It In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Action</span>
          </h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">
            Experience how our AI transforms investment workflows with real-time insights and analysis.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <InteractivePortfolioVisualization 
              initialPortfolioData={[
                { name: 'Technology', value: 45, color: '#3b82f6' },
                { name: 'Healthcare', value: 25, color: '#8b5cf6' },
                { name: 'Financials', value: 10, color: '#ec4899' },
                { name: 'Consumer', value: 10, color: '#ef4444' },
                { name: 'Energy', value: 5, color: '#f59e0b' },
                { name: 'Other', value: 5, color: '#10b981' }
              ]}
              initialRiskMetrics={{
                totalRisk: 13.5,
                sharpeRatio: 1.4,
                maxDrawdown: 18.5,
                correlationToMarket: 0.85
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Stories</span></h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              See how alternative investment firms transform their operations with our AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`font-medium text-${study.color}-400`}>{study.type}</div>
                    <div className="text-sm text-gray-400">{study.aum}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`text-${study.color}-500 mr-2 mt-1`}>•</div>
                        <p className="text-gray-300 text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-300 group-hover:text-blue-400 transition-colors">
                    <span className="font-medium">Read Case Study</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Investment Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading investment firms already using our AI to gain a competitive edge and drive measurable business outcomes.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <AIFooter />
      
      {/* Custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default OutcomesPage;