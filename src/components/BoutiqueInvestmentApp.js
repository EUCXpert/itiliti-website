import Navigation from './Navigation';
import React, { useState } from 'react';
import { ArrowRight, Shield, BarChart4, FileText, CheckSquare, AlertTriangle, BookOpen, Clock, Users, Lightbulb } from 'lucide-react';

const BoutiqueInvestmentApp = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  
  const phases = [
    { 
      id: 0, 
      title: "Security Foundation", 
      description: "Establish robust security infrastructure to protect sensitive investment data and meet regulatory requirements.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-blue-700"
    },
    { 
      id: 1, 
      title: "Microsoft Licensing Optimization", 
      description: "Maximize ROI on Microsoft investments through strategic licensing and platform utilization.",
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500 to-purple-700"
    },
    { 
      id: 2, 
      title: "Business Transformation", 
      description: "Reimagine core investment workflows and operations for maximum efficiency and competitive advantage.",
      icon: <BarChart4 className="w-8 h-8 text-emerald-600" />,
      color: "from-emerald-500 to-emerald-700"
    }
  ];

  const artifacts = [
    {
      id: 1,
      title: "Security Posture Assessment",
      description: "Comprehensive evaluation of your firm's security stance against financial industry threats and regulatory requirements.",
      icon: <Shield className="w-6 h-6" />,
      phase: 0,
      stats: [
        { value: "43%", label: "Increase in targeted attacks against financial services" },
        { value: "$4.35M", label: "Average cost per security breach" },
        { value: "75%", label: "Reduction in incidents after Microsoft security implementation" }
      ]
    },
    {
      id: 2,
      title: "Operational Due Diligence Readiness",
      description: "Prepare your firm to excel in investor scrutiny with comprehensive ODD assessment and remediation.",
      icon: <CheckSquare className="w-6 h-6" />,
      phase: 0,
      stats: [
        { value: "35%", label: "Capital allocations lost due to failed ODD" },
        { value: "72%", label: "Firms lack adequate BCP testing" },
        { value: "85%", label: "Reduction in critical findings through preparation" }
      ]
    },
    {
      id: 3,
      title: "Regulatory Compliance Framework",
      description: "Navigate complex regulatory requirements with Microsoft-powered compliance solutions.",
      icon: <FileText className="w-6 h-6" />,
      phase: 0,
      stats: [
        { value: "38%", label: "Increase in SEC examinations for boutique firms" },
        { value: "30%", label: "Average increase in Microsoft Compliance Manager score" },
        { value: "65%", label: "Reduction in audit preparation time" }
      ]
    },
    {
      id: 4,
      title: "Microsoft Licensing Optimization",
      description: "Strategic license management to reduce costs and enhance value from your Microsoft investments.",
      icon: <Lightbulb className="w-6 h-6" />,
      phase: 1,
      stats: [
        { value: "25-40%", label: "Average reduction in total Microsoft spend" },
        { value: "35%", label: "E5 features typically unused without optimization" },
        { value: "45%", label: "Cost reduction through proper Azure sizing" }
      ]
    },
    {
      id: 5,
      title: "White Glove Service Model",
      description: "Experience enterprise-grade service with boutique attention and financial services expertise.",
      icon: <Users className="w-6 h-6" />,
      phase: 1,
      stats: [
        { value: "15 min", label: "Guaranteed initial response time" },
        { value: "98%", label: "Client satisfaction score" },
        { value: "97%", label: "Annual client retention rate" }
      ]
    },
    {
      id: 6,
      title: "CxO Advisory Services",
      description: "Access fractional executive expertise to guide your technology strategy and implementation.",
      icon: <Users className="w-6 h-6" />,
      phase: 1,
      stats: [
        { value: "60-75%", label: "Cost savings vs. full-time executive hire" },
        { value: "35%", label: "Reduction in technology TCO" },
        { value: "85%", label: "CxO clients adopt additional managed services" }
      ]
    },
    {
      id: 7,
      title: "Investment Workflow Modernization",
      description: "Streamline deal flow, due diligence, and portfolio management with Microsoft-powered solutions.",
      icon: <BarChart4 className="w-6 h-6" />,
      phase: 2,
      stats: [
        { value: "40-60%", label: "Reduction in document processing time" },
        { value: "25%", label: "Increase in qualified deal opportunities" },
        { value: "70%", label: "Reduction in manual reporting tasks" }
      ]
    },
    {
      id: 8,
      title: "Digital Transformation Roadmap",
      description: "Chart your firm's evolution from secure foundation to strategic technology advantage.",
      icon: <ArrowRight className="w-6 h-6" />,
      phase: 2,
      stats: [
        { value: "20-35%", label: "Operational efficiency gain" },
        { value: "3.5%", label: "Performance advantage for digitally mature firms" },
        { value: "15%", label: "Improved returns through data-driven decisions" }
      ]
    },
    {
      id: 9,
      title: "Revenue Enhancement Strategies",
      description: "Discover how optimized technology directly impacts AUM growth, performance, and investor confidence.",
      icon: <AlertTriangle className="w-6 h-6" />,
      phase: 2,
      stats: [
        { value: "1.5-2%", label: "Average management fee by fund type" },
        { value: "50-100", label: "Basis point reduction from operational inefficiencies" },
        { value: "20%", label: "Typical performance fee structures" }
      ]
    }
  ];

  const painPoints = [
    { 
      title: "Security & Compliance Pressure",
      description: "Intensified regulatory scrutiny and investor due diligence demands create significant overhead and risk.",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
    },
    { 
      title: "Operational Inefficiency",
      description: "Manual processes and siloed systems slow deal flow and absorb valuable analyst and management time.",
      icon: <Clock className="w-6 h-6 text-orange-600" />
    },
    { 
      title: "Technology Cost Management",
      description: "Balancing necessary technology investments against fee pressure and investor expense scrutiny.",
      icon: <BookOpen className="w-6 h-6 text-orange-600" />
    }
  ];

  const filteredArtifacts = artifacts.filter(artifact => artifact.phase === activePhase);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Modern Microsoft Solutions for<br/>Boutique Alternative Investment</h1>
          <p className="text-xl mb-8 max-w-2xl">Enterprise-grade technology with boutique service delivery, specifically designed for hedge funds, private equity, venture capital, and family offices.</p>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4">Common Challenges in Alternative Investment</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{point.title}</h3>
                    <p className="text-sm text-white text-opacity-90">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Three-Phase Approach */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Three-Phase Approach</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div 
              key={phase.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer ${activePhase === phase.id ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => setActivePhase(phase.id)}
            >
              <div className={`bg-gradient-to-r ${phase.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  {phase.icon}
                  <h3 className="text-xl font-semibold">Phase {phase.id + 1}: {phase.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Phase Details */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Phase {activePhase + 1}: {phases[activePhase].title}</h2>
          <p className="text-xl text-gray-700 mb-12">{phases[activePhase].description}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {filteredArtifacts.map((artifact) => (
              <div 
                key={artifact.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${activeCard === artifact.id ? 'ring-4 ring-blue-400' : ''}`}
                onClick={() => setActiveCard(activeCard === artifact.id ? null : artifact.id)}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {artifact.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{artifact.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{artifact.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeCard === artifact.id ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="font-medium text-gray-800 mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {artifact.stats.map((stat, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                    {activeCard === artifact.id ? 'Show Less' : 'Show Details'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Alternative Investment Firm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a complimentary security assessment and discover how our three-phase approach can enhance your firm's operations.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors">
            Request Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoutiqueInvestmentApp;