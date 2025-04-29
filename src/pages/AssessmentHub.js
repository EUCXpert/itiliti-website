// Updated hero section for AssessmentHub.js
// Replace the existing hero section with this code

import React, { useState } from 'react';
import { ArrowRight, Shield, BrainCircuit, Briefcase } from 'lucide-react';
import Navigation from '../components/Navigation';
import SecurityPostureAssessment from '../components/SecurityPostureAssessment';
import AIReadinessAssessment from '../components/AIReadinessAssessment';
import OperationalDueDiligenceAssessment from '../components/OperationalDueDiligenceAssessment';

const AssessmentHub = () => {
  const [activeAssessment, setActiveAssessment] = useState(null);

  // Available assessments
  const assessments = [
    {
      id: 'security',
      title: 'Security Posture Assessment',
      description: 'Evaluate your firm\'s cybersecurity controls, governance, and resilience against financial services threats and regulatory requirements to enhance investor confidence and protect critical assets.',
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      component: SecurityPostureAssessment,
      benefits: [
        "Identify gaps in your security posture before institutional investors do",
        "Receive prioritized recommendations aligned with SEC and regulatory expectations",
        "Develop an actionable roadmap for security enhancement",
        "Prepare comprehensive documentation for investor due diligence"
      ]
    },
    {
      id: 'ai_readiness',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your firm\'s preparedness to implement and benefit from artificial intelligence solutions in your investment operations.',
      icon: <BrainCircuit className="w-10 h-10 text-blue-600" />,
      component: AIReadinessAssessment,
      benefits: [
        "Understand your data readiness for AI implementation",
        "Identify high-value AI use cases specific to your investment strategy",
        "Evaluate your technology infrastructure's AI capabilities",
        "Determine the governance and compliance frameworks needed for responsible AI"
      ]
    },
    {
      id: 'odd_readiness',
      title: 'Operational Due Diligence Assessment',
      description: 'Evaluate your readiness for institutional investor operational due diligence (ODD) and identify critical improvement areas to enhance your capital raising capabilities.',
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      component: OperationalDueDiligenceAssessment,
      benefits: [
        "Identify operational gaps before institutional investors do",
        "Improve operational documentation for investor scrutiny",
        "Strengthen business continuity and disaster recovery capabilities",
        "Enhance vendor management and oversight processes"
      ]
    }
  ];

  // Handler to go back to hub
  const handleBackToHub = () => {
    setActiveAssessment(null);
  };

  // Scroll to assessments section
  const scrollToAssessments = () => {
    const assessmentSection = document.getElementById('assessment-section');
    if (assessmentSection) {
      assessmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-5">
              <Shield className="w-4 h-4 mr-2" />
              Specialized for Alternative Investment Firms
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assessment Hub</h1>
            
            <p className="text-xl mb-8 max-w-2xl">
              Evaluate your firm's capabilities, identify improvement opportunities, and receive personalized recommendations aligned with institutional investor expectations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToAssessments}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start an Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Show assessment selection when no assessment is active */}
        {!activeAssessment && (
          <>
            <div className="max-w-4xl mx-auto mb-12" id="assessment-section">
              <h2 className="text-2xl font-bold mb-4">Select an Assessment</h2>
              <p className="text-gray-700">
                Our specialized assessments are designed specifically for boutique alternative investment firms. 
                Each assessment takes approximately 5-7 minutes to complete and provides personalized results 
                with actionable recommendations based on institutional investor expectations and industry best practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {assessments.map((assessment) => (
                <div 
                  key={assessment.id} 
                  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setActiveAssessment(assessment.id)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      {assessment.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{assessment.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{assessment.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {assessment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-blue-600 text-sm font-medium flex items-center justify-center">
                    Start Assessment
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-4">Why Complete These Assessments?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Identify Critical Risks</h4>
                    <p className="text-gray-700 text-sm">Discover potential vulnerabilities before they impact your business or institutional investor confidence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <BrainCircuit className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Planning</h4>
                    <p className="text-gray-700 text-sm">Receive prioritized recommendations to inform your technology roadmap and resource allocation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Capital Raising Readiness</h4>
                    <p className="text-gray-700 text-sm">Prepare for institutional investor due diligence to enhance your capital raising capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Edge</h4>
                    <p className="text-gray-700 text-sm">Benchmark your capabilities against industry standards and gain a competitive advantage in the alternative investment space.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Show selected assessment when active */}
        {activeAssessment && 
          (() => {
            const assessment = assessments.find(a => a.id === activeAssessment);
            const AssessmentComponent = assessment.component;
            return <AssessmentComponent onBackToHub={handleBackToHub} />;
          })()
        }
      </div>
    </div>
  );
};

export default AssessmentHub;