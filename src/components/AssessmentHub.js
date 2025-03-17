import React, { useState } from 'react';
import { ArrowRight, Shield, BrainCircuit, Briefcase } from 'lucide-react';
import Navigation from './Navigation';
import SecurityPostureAssessment from './SecurityPostureAssessment';
import AIReadinessAssessment from './AIReadinessAssessment';
import OperationalDueDiligenceAssessment from './OperationalDueDiligenceAssessment';

const AssessmentHub = () => {
  const [activeAssessment, setActiveAssessment] = useState(null);

  // Available assessments
  const assessments = [
    {
      id: 'security',
      title: 'Security Posture Assessment',
      description: 'Evaluate your firm\'s cybersecurity controls, governance, and resilience against financial services threats and regulatory requirements.',
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      component: SecurityPostureAssessment
    },
    {
      id: 'ai_readiness',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your firm\'s preparedness to implement and benefit from artificial intelligence solutions in your investment operations.',
      icon: <BrainCircuit className="w-10 h-10 text-blue-600" />,
      component: AIReadinessAssessment
    },
    {
      id: 'odd_readiness',
      title: 'Operational Due Diligence Assessment',
      description: 'Evaluate your readiness for institutional investor operational due diligence (ODD) and identify critical improvement areas.',
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      component: OperationalDueDiligenceAssessment
    }
  ];

  // Handler to go back to hub
  const handleBackToHub = () => {
    setActiveAssessment(null);
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="bg-gradient-to-r from-gray-900 to-black text-white relative">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Assessment Hub</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Evaluate your firm's capabilities, identify improvement opportunities, and get personalized recommendations.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Show assessment selection when no assessment is active */}
        {!activeAssessment && (
          <>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Select an Assessment</h2>
              <p className="text-gray-700">
                Our specialized assessments are designed specifically for boutique alternative investment firms. 
                Each assessment takes approximately 5-7 minutes to complete and provides personalized results 
                and recommendations based on industry best practices.
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
                    <p className="text-gray-700 text-sm">Discover potential vulnerabilities before they impact your business or investor confidence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <BrainCircuit className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Planning</h4>
                    <p className="text-gray-700 text-sm">Get prioritized recommendations to inform your technology roadmap and resource allocation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Investor Readiness</h4>
                    <p className="text-gray-700 text-sm">Prepare for institutional investor due diligence and enhance your capital raising capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Edge</h4>
                    <p className="text-gray-700 text-sm">Benchmark your capabilities against industry standards and gain a competitive advantage.</p>
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